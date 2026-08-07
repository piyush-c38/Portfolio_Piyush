---
title: "Building TruePrice: Finding the Real Price Behind Online Discounts"
slug: building-true-price-finding-the-real-price
excerpt: The story behind TruePrice, an ongoing project that aims to calculate
  the actual effective price of products by analyzing offers, discounts,
  cashback rewards, and coupons from e-commerce websites.
date: 2026-05-13
readTime: 4 min read
category: Software Development
image: https://cdn.dribbble.com/userupload/44284165/file/ea2cb389f593098031f9358bd341f7bf.jpg?resize=752x&vertical=center
featured: false
---
We've all been there.

You're browsing an e-commerce website and suddenly a giant banner catches your attention: **"70% OFF"**.

For a moment, it feels like you've discovered the deal of the century. Then the confusion starts. A bank offer appears. A coupon appears. A cashback reward appears. Another offer is hidden somewhere lower on the page. By the time you reach checkout, a simple question becomes surprisingly difficult to answer:

> What is the actual amount I'm going to pay?

That question became the starting point of **TruePrice**.

## The Idea

The goal of TruePrice is simple. A user pastes a product link, and the system analyzes all available offers to determine the actual effective price. Instead of manually calculating coupons, bank discounts, cashback rewards, and promotional offers, the platform attempts to do the heavy lifting automatically.

At least, that's the idea. Building it turned out to be much harder than expected.

## The First Challenge

We initially assumed that extracting product information from a webpage would be straightforward. Open the page, read the price, read the offers, and calculate the result.

Modern e-commerce websites had other plans.

Product layouts vary across categories, offer sections load dynamically, and important information is often hidden behind expandable components. A scraper that works perfectly today might stop working tomorrow because of a small frontend change.

The first challenge wasn't calculating prices. It was simply understanding the webpage consistently.

## The Second Challenge

Humans can read offer descriptions instantly. Computers cannot.

Offers appear in dozens of formats:

* 10% Instant Discount up to ₹1500
* Flat ₹750 Cashback on EMI Transactions
* Extra ₹500 Off with Coupon

Every offer follows different rules and conditions. To solve this, we started building a pricing engine that converts promotional text into structured data that can be analyzed mathematically.

## The Third Challenge

Not every offer can be combined with every other offer.

Some offers stack together. Some are mutually exclusive. Some require a minimum purchase amount, while others only work with specific payment methods.

This transformed a simple discount calculator into an optimization problem. The system needs to evaluate multiple valid combinations and determine which one actually produces the lowest effective cost.

## Current Approach

The current prototype uses a combination of:

* Next.js
* React
* TypeScript
* Playwright
* Cheerio
* Groq LLM API

Playwright helps us interact with dynamic webpages, while the pricing engine evaluates offer combinations and AI helps generate user-friendly explanations.

## Current Status

TruePrice is still under active development.

The core idea has been validated, and the pricing engine is already capable of analyzing many offer combinations. However, we are currently focused on improving two major areas:

* Website scraping reliability
* Offer extraction and pricing algorithms

Interestingly, the hardest part hasn't been calculating discounts. It's been teaching software to understand how modern e-commerce websites present them.

The goal remains simple: help users understand what they're actually paying, not just what the discount banner says.
