---
title: "Building GitInsight: Making GitHub Repositories Explain Themselves"
slug: building-gitinsight
excerpt: How we built GitInsight, an AI-powered repository analysis platform
  that helps developers understand unfamiliar GitHub repositories using AST
  parsing, RAG, embeddings, and LLMs.
date: 2026-06-04
readTime: 15 min read
category: Software Development
image: https://cdn.dribbble.com/userupload/42642838/file/original-22416a1c160bc0debc58759e9ff1fa96.png?resize=752x&vertical=center
featured: false
---
Every developer has experienced this.

You discover an interesting open-source project, clone the repository, open it in your editor, and immediately find yourself staring at dozens of folders, hundreds of files, and absolutely no idea where to begin.

You start opening random files.

Then another file.

Then another.

Thirty minutes later, you're still trying to answer a simple question:

"How does this project actually work?"

That frustration became the starting point for GitInsight.

## The Problem

Most repositories are built for machines to run and developers to maintain. They are rarely built for newcomers trying to understand them.

Even with a good README, understanding a project usually means exploring the file structure manually, tracing dependencies, figuring out important entry points, understanding how different modules interact, and reading code before knowing what you're actually looking for.

Large Language Models can help explain code, but they don't automatically understand an entire repository.

We wanted a tool that could take any public GitHub repository and answer questions like:

* Where should I start?
* What technologies does this project use?
* What are the important files?
* How are different modules connected?
* What dependencies does this project rely on?
* What does this codebase actually do?

In short, we wanted the repository to explain itself.

## The First Approach

Our initial idea sounded simple.

* Download a repository.
* Feed it to an LLM.
* Ask questions.

Unfortunately, reality disagreed.

Repositories are often too large to fit into a model's context window. Even when they do fit, sending thousands of lines of code directly to an LLM is expensive, slow, and often produces vague answers.

We quickly realized that before asking an AI to explain a project, we first needed to understand the project ourselves.

That's where the real engineering work began.

## Understanding the Repository

The first challenge was repository ingestion.

Initially, we relied on traditional Git cloning. It worked perfectly on local machines.

Then deployment happened.

Our hosting environment didn't include Git by default, which resulted in one of those classic production errors that looks obvious only after you've spent hours debugging it.

Instead of cloning repositories, we switched to downloading GitHub repository archives directly and extracting them locally.

The end result was actually faster, simpler, and more deployment friendly.

Once we had the repository, we needed to understand it.

We built a repository analysis pipeline that:

* Scans project files
* Detects technology stacks
* Extracts dependencies
* Identifies important files
* Generates onboarding information
* Builds repository knowledge for AI retrieval

## Why We Chose AST Parsing

One thing became clear very quickly.

File names alone don't tell the whole story.

A file called `utils.ts` could contain anything from a helper function to half the application's business logic.

We needed a deeper understanding of the code.

To solve this, GitInsight uses AST (Abstract Syntax Tree) parsing through Tree-sitter and TypeScript/Babel parsing tools.

Instead of treating source code as plain text, we analyze its structure.

This allows us to identify:

* Functions
* Classes
* Imports
* Exports
* Relationships between files

This structured understanding became the foundation for generating meaningful repository insights.

## Building Repository Chat

The repository chat feature was one of the most exciting parts of the project.

The idea was simple:

What if you could ask questions about a repository the same way you ask questions to ChatGPT?

Questions like:

* Where is authentication implemented?
* What database does this project use?
* How do I start contributing?
* What is the main entry point?

To make this work, we built a Retrieval-Augmented Generation (RAG) pipeline.

The process looks like this:

1. Split repository code into meaningful chunks.
2. Generate embeddings.
3. Store them in a local vector database.
4. Retrieve relevant code when a user asks a question.
5. Send only relevant context to the LLM.

This dramatically improved response quality while keeping the system efficient.

## Problems We Didn't Expect

Like every project, GitInsight looked much easier on the whiteboard.

One of my biggest challenges was deployment.

Originally, we used a remote ChromaDB instance for vector storage.

It worked locally.

It worked occasionally in production.

And then it didn't.

Rate limits, connection issues, memory constraints, and deployment complexity turned a simple feature into a surprisingly large maintenance burden.

Eventually, we made a practical decision.

We replaced the external dependency with a lightweight local persistent vector store.

The result?

* Simpler deployment
* Faster responses
* Fewer moving parts
* Better reliability

Another challenge came from embeddings.

Early versions of the system took more than a minute to process repositories because embeddings were being generated inefficiently.

After profiling the pipeline, introducing batching, optimizing workers, and reducing unnecessary overhead, analysis times improved dramatically.

Nothing teaches performance engineering quite like watching a request sit for ninety seconds.

## The Features That Made It Into GitInsight

After multiple iterations, GitInsight now provides:

* Repository analysis from any public GitHub URL
* Technology stack detection
* Dependency extraction
* Repository onboarding guidance
* Repository-specific AI chat
* File explorer
* Code-aware retrieval using RAG
* Dependency visualization
* Repository knowledge generation

One feature we are still improving is architecture generation. It works in some cases but is not yet accurate enough to be considered complete.

## What We Learned

Building GitInsight taught us something interesting.

The difficult part wasn't calling an LLM.

The difficult part was creating enough structure around the repository so the LLM could give useful answers.

Most of the work went into:

* Understanding repositories
* Building retrieval pipelines
* Handling deployment constraints
* Improving performance
* Making results reliable

The AI was only one piece of the system.

The engineering around it mattered just as much.

## The Final Result

Today, GitInsight can take a public GitHub repository and help developers understand it significantly faster than manually exploring files.

Whether you're evaluating an open-source project, onboarding onto a new codebase, or trying to understand how someone built something interesting, GitInsight provides a practical starting point.

Instead of spending hours opening random files and tracing imports, you can get onboarding guidance, explore important files, understand project dependencies, and ask repository-specific questions within minutes.

And if you've ever spent an hour searching through folders wondering where the application actually starts, that's exactly the problem we built GitInsight to solve.

## Try It Out

Curious to see GitInsight in action?

Simply visit the hosted application and paste any public GitHub repository URL.

GitInsight will automatically analyze the repository and generate:

* Technology stack insights
* Dependency information
* Repository onboarding guidance
* Repository-specific AI chat
* File exploration

Whether it's a small side project or a large open-source repository, GitInsight helps you understand the codebase faster.

## Want to Contribute?

GitInsight is still evolving, and contributions are always welcome.

If you find a bug, have an idea for a feature, or want to improve repository understanding, feel free to open an issue or submit a pull request.

To get started locally:

```
git clone https://github.com/piyush-c38/git-insight.git
cd git-insight
npm install
npm run dev 
```

Configure the required environment variables and you're ready to start experimenting.

## Closing Thoughts

Building GitInsight started with a simple frustration: understanding a new repository takes too much time.

Along the way, we learned that repository intelligence is much more than connecting an LLM to source code. It requires understanding code structure, building retrieval systems, solving deployment challenges, and continuously improving performance.

The journey involved failed deployments, memory issues, slow embedding pipelines, and several design pivots. But each challenge helped shape a better product.

GitInsight isn't just about explaining repositories. It's about helping developers spend less time figuring out where to start and more time building.

And honestly, if GitInsight saves someone from opening twenty random files before finding the right one, we'll consider that a success.
