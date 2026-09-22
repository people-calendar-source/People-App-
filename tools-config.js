/*
  ================================================================
  PEOPLE & TALENT HUB — TOOLS CONFIG
  ================================================================
  This is the ONLY file you need to edit to add, remove, or move
  a tool. index.html reads this file and builds the sidebar +
  home page automatically — you never need to touch index.html.

  TO ADD A NEW TOOL:
  1. Upload the tool's .html file into this same folder/repo.
  2. Find the category below you want it in (or add a new category
     block, copying the pattern).
  3. Add one entry to that category's "tools" array, e.g.:

     { id: "my-tool", label: "My New Tool", file: "my-tool.html",
       icon: "file", description: "One short sentence about it." }

  4. Commit. Done — no other changes needed.

  ICON OPTIONS (pick one, or omit "icon" for a generic default):
  folder, trending, graduation, repeat, check, barchart,
  calendar, file, coins, users
  ================================================================
*/

window.PEOPLE_APP_CONFIG = {

  categories: [
    {
      id: "legal",
      label: "01 Legal & Compliance",
      icon: "folder",
      tools: [
        {
          id: "urlaubsrechner",
          label: "Vacation Calculator",
          file: "urlaubsrechner.html",
          icon: "calendar",
          description: "Calculate remaining vacation days on exit and vacation reductions for special leave."
        },
        {
          id: "splitter",
          label: "Document Splitter & Renamer",
          file: "document-splitter-renamer.html",
          icon: "file",
          description: "Automatically split, rename, and export documents."
        },
        {
      id: "long-leave",
      label: "Long Leave Impact Calculator",
      file: "long-leave-impact-calculator.html",
      icon: "calendar",
      description: "Impact of Unpaid Leave, Time Out, and Parental Leave on salary, benefits, and vacation entitlement — including required Personio/payroll steps."
        },
        {
      id: "parental-leave-salary",
      label: "Parental Leave Salary Calculator",
      file: "parental-leave-salary-calculator.html",
      icon: "pacifier",
      description: "Day-exact prorated salary calculations across multiple parental leave periods, including JAEG threshold checks for PKV/GKV eligibility."
        }
      ]
    },
    {
      id: "performance",
      label: "02 Performance & Reward",
      icon: "trending",
      tools: [
        {
          id: "vsop",
          label: "VSOP Equity Calculator",
          file: "vsop-equity-calculator.html",
          icon: "coins",
          description: "Calculate equity thresholds and vesting shares for virtual option programs."
        },
        {
          id: "shares",
          label: "Shares Calculator",
          file: "shares-calculator.html",
          icon: "barchart",
          description: "Share calculations including PDF export for cap table scenarios."
        },
        {
          id: "company-car",
          label: "Company Car Calculator",
          file: "company-car-calculator.html",
          icon: "trending",
          description: "Salary deduction, taxable benefit, and total monthly cost for a company car (Germany)."
        }
      ]
    },
    {
      id: "development",
      label: "03 Development",
      icon: "graduation",
      tools: []
    },
    {
      id: "transitioning",
      label: "04 Employee Transitioning",
      icon: "repeat",
      tools: []
    },
    {
      id: "engagement",
      label: "05 Engagement",
      icon: "check",
      tools: []
    },
    {
      id: "analytics",
      label: "06 Analytics",
      icon: "barchart",
      tools: []
    }
  ]

};
