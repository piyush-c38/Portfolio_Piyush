import { siteContent } from "@/lib/content";

export const openEmailClient = (email = siteContent.personal_email) => {
  const isMobileOrTablet = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(
    navigator.userAgent,
  );
  const subject = encodeURIComponent(siteContent.service_inquiry_subject);

  if (isMobileOrTablet) {
    window.location.href = `mailto:${email}?subject=${subject}`;
    return;
  }

  window.open(
    `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`,
    "_blank",
  );
};
