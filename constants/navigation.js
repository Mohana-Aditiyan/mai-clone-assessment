// All links route to the placeholder /coming-soon page,
// per the assignment requirements.
export const PLACEHOLDER_HREF = "/coming-soon";

export const PRIMARY_NAV = [
  { label: "Home", href: PLACEHOLDER_HREF, hasDropdown: false },
  {
    label: "How It Works",
    href: PLACEHOLDER_HREF,
    hasDropdown: true,
    children: [
      { label: "Project Owner", href: PLACEHOLDER_HREF },
      { label: "Trader", href: PLACEHOLDER_HREF },
      { label: "Intern", href: PLACEHOLDER_HREF },
    ],
  },
  { label: "Projects", href: PLACEHOLDER_HREF, hasDropdown: false },
  { label: "Blogs", href: PLACEHOLDER_HREF, hasDropdown: false },
];

// Sign-in dropdown items — same three personas
export const SIGN_IN_DROPDOWN = [
  { label: "Project Owner", href: PLACEHOLDER_HREF },
  { label: "Trader", href: PLACEHOLDER_HREF },
  { label: "Intern", href: PLACEHOLDER_HREF },
];

export const ACTION_NAV = [
  { label: "POST A PROJECT", href: PLACEHOLDER_HREF, icon: "plus" },
  { label: "SEND PROPOSALS", href: PLACEHOLDER_HREF, icon: "send" },
  { label: "APPLY INTERNSHIP", href: PLACEHOLDER_HREF, icon: "briefcase" },
];

export const FOOTER_NAV = {
  Company: [
    { label: "About Us", href: PLACEHOLDER_HREF },
    { label: "Careers", href: PLACEHOLDER_HREF },
    { label: "CSR", href: PLACEHOLDER_HREF },
    { label: "FAQ", href: PLACEHOLDER_HREF },
  ],
  Platform: [
    { label: "Contact Us", href: PLACEHOLDER_HREF },
    { label: "Terms & Conditions", href: PLACEHOLDER_HREF },
    { label: "Privacy Policy", href: PLACEHOLDER_HREF },
    { label: "NDA", href: PLACEHOLDER_HREF },
  ],
};