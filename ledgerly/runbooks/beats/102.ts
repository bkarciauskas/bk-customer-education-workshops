import type { DemoSection } from "@/runbooks/types";

export const RUNBOOK_SECTIONS_102 = [
  {
    id: "raise-pr",
    title: "How do you raise a PR?",
    beats: [
      {
        id: "start-from-101",
        title: "Start from the 101 change",
        promptType: "adaptable",
        say: "102 picks up where 101 ended: a working change on my laptop that nobody else has seen.",
        detail:
          "Open a new local agent on main. If you kept the 101 changes, skip the prompt. Otherwise rebuild them.",
        example:
          "Add an edit email control to the invoice detail customer card. Redact the email and show it in plaintext when I click the box to edit it. Fix the failing test.",
      },
      {
        id: "create-base-branch",
        title: "Create a practice base branch",
        promptType: "none",
        say: "In your own repository the base is main. In the workshop repository we merge into a throwaway base so the demo reset can remove it.",
        detail:
          "git switch -c demo/delete-me-102-base main\ngit push -u origin demo/delete-me-102-base\nnpm run demo:session -- record branch demo/delete-me-102-base --remote",
      },
      {
        id: "local-done-check",
        title: "Check what is in the change",
        promptType: "reusable",
        say: "Local done is not merged. Before I open a PR, I want to know what is in the diff and whether it belongs together.",
        detail: "",
        example:
          "/ask Summarize the uncommitted changes by file and concern. Flag anything that should not ship in the same PR.",
      },
      {
        id: "open-pr",
        title: "Open a PR from Grok Build",
        promptType: "adaptable",
        say: "The agent writes the branch, commit, and PR body. GitHub owns review, checks, and merge.",
        detail: "",
        example:
          "Create branch demo/delete-me-102-email from demo/delete-me-102-base, commit these changes with a clear message, push it, and open a PR into demo/delete-me-102-base. Title it [demo-delete-me] Edit and redact the customer email. In the body, list what changed, how to test it, and what a reviewer should check.",
        after: [
          { kind: "do", text: "npm run demo:session -- record branch demo/delete-me-102-email --remote" },
        ],
      },
      {
        id: "read-pr",
        title: "Read the PR as a reviewer",
        promptType: "none",
        say: "The PR body is the first thing a coworker reads. If it does not say how to test the change, fix it now.",
        detail: "Open the PR on GitHub. Read the title, the body, and the Files changed tab.",
      },
    ],
  },
  {
    id: "resolve-review",
    title: "How do you resolve review comments?",
    beats: [
      {
        id: "seed-review-comments",
        title: "Leave review comments",
        promptType: "none",
        say: "In the workshop, I play the reviewer. On your team, a coworker leaves these.",
        detail:
          "On GitHub, open Files changed and start a review.\nOn the email save code, comment: “Reject an empty email and keep the previous value.”\nOn the redaction code, comment: “Add a unit test for the redaction.”\nOn the PR, comment: “This mixes the suggested-credit v2 migration with the email feature. Please split it.”\nSubmit the review with Request changes.",
      },
      {
        id: "optional-bugbot",
        title: "Run Bugbot",
        promptType: "reusable",
        say: "Bugbot is structured review: each finding has a file, a line, and a reason. Treat it like a reviewer, not an oracle.",
        detail: "",
        example: "/review-bugbot this PR",
        optional: { feature: "Bugbot" },
      },
      {
        id: "bugbot-fallback",
        title: "Fallback: run the change reviewer",
        promptType: "reusable",
        detail: "If Bugbot is not enabled on this repository, use the project's change reviewer subagent instead.",
        example: "Use the change reviewer subagent to review this PR. List each issue with its file, line, and severity.",
      },
      {
        id: "triage-comments",
        title: "Triage the comments with the agent",
        promptType: "reusable",
        say: "The agent drafts the triage. I decide which comments get a code change.",
        detail: "",
        example:
          "/ask Read the open review comments and Bugbot findings on this PR. For each one, say whether to fix it in this PR, split it into another PR, or reply without a change, and why.",
      },
      {
        id: "fix-comments",
        title: "Fix the comments you accept",
        promptType: "reusable",
        say: "Same steering as 101: stop before the push so I review every diff.",
        detail: "",
        example:
          "Fix the review comments we agreed to fix in this PR, one commit per comment. Stop before you push so I can review the diffs.",
        after: [
          { kind: "do", text: "Select Changes in the right hand panel. Review each commit." },
          {
            kind: "prompt",
            promptType: "reusable",
            text: "Push the commits and reply on each thread with the commit that fixes it.",
          },
        ],
      },
      {
        id: "re-request-review",
        title: "Re-request review",
        promptType: "none",
        say: "A thread is resolved after a person checks the fix, not when the agent says it is done.",
        detail:
          "On GitHub, resolve the fixed threads and re-request review. Leave the split comment open.",
      },
    ],
  },
  {
    id: "split-change",
    title: "How do you split a big change?",
    beats: [
      {
        id: "propose-split",
        title: "Ask the agent to propose a split",
        promptType: "reusable",
        say: "Slice by what a reviewer can approve alone: an independent fix, a foundation, then the feature on top.",
        detail: "",
        example:
          "/plan Split this PR into smaller PRs that each build, pass tests, and can be reviewed alone. Keep the review fixes. Name the slices, the files in each, the merge order, and which slices stack on another.",
      },
      {
        id: "review-split-plan",
        title: "Review the split plan",
        promptType: "none",
        say: "Independent PRs target the base. A stacked PR targets the slice below it, so its diff shows only its own change.",
        detail:
          "Check that each slice has its own tests and that no file is split across slices unless it has to be. Expect the suggested-credit migration as its own slice.",
      },
      {
        id: "build-split",
        title: "Open the smaller PRs",
        promptType: "adaptable",
        detail: "Click Build Locally.",
        example:
          "Build the plan. Create one branch per slice named demo/delete-me-102-<slice> and open a PR for each with a [demo-delete-me] title. Base independent slices on demo/delete-me-102-base and stacked slices on the slice below. Link the PRs to each other in their bodies.",
        after: [
          {
            kind: "do",
            text: "Record each branch: npm run demo:session -- record branch demo/delete-me-102-<slice> --remote",
          },
        ],
      },
      {
        id: "close-original",
        title: "Close the original PR",
        promptType: "reusable",
        say: "Review threads do not move to the new PRs. Link back so the reviewer can find the history.",
        detail: "",
        example: "Close the original PR with a comment that links the smaller PRs that replace it.",
      },
    ],
  },
  {
    id: "merge-validate",
    title: "How do you merge and validate?",
    beats: [
      {
        id: "check-merge-order",
        title: "Check the merge order",
        promptType: "reusable",
        detail: "",
        example:
          "/ask For each of my open [demo-delete-me] PRs, list its base, checks, review status, and merge order. Tell me which one is safe to merge first.",
      },
      {
        id: "merge-first-slice",
        title: "Merge the first slice",
        promptType: "none",
        say: "Merge one slice at a time. After each merge, the next stacked PR needs a new base.",
        detail: "On GitHub, merge the first PR in the order. Use the repository's merge method.",
      },
      {
        id: "retarget-stack",
        title: "Update the stacked PR",
        promptType: "reusable",
        say: "If checks fail or a reviewer blocks a slice, stop the stack there. Fix that slice. The slices already merged are safe.",
        detail: "",
        example:
          "The first slice merged. Rebase the next stacked PR onto its new base, change the PR base to match, and push. Tell me if anything conflicts.",
      },
      {
        id: "merge-remaining",
        title: "Merge the remaining slices",
        promptType: "none",
        detail: "Merge each remaining PR in order after its checks pass and its review is approved.",
      },
      {
        id: "validate-after-merge",
        title: "Validate after merge",
        promptType: "adaptable",
        say: "Merged is not done. I check the merged branch the way a user and a teammate would.",
        detail: "",
        example:
          "Check out demo/delete-me-102-base and pull. Run the tests and start the application. Confirm each merged PR does what its description says, and list anything that is not done.",
        after: [
          {
            kind: "do",
            text: "Go to http://localhost:43173/invoices/inv_1048. Edit the email in the Customer box.",
          },
          {
            kind: "do",
            text: "Go to http://localhost:43173/disputes/dsp_1043. The suggested credit reads $249.00 because the v2 migration merged.",
          },
        ],
      },
      {
        id: "debug-after-merge",
        title: "Debug a post-merge regression",
        promptType: "reusable",
        detail: "Only if validation found a problem.",
        example: "/debug what changed in the last merge that causes this failure",
      },
      {
        id: "cleanup",
        title: "Clean up",
        promptType: "none",
        detail:
          "git switch main\nnpm run demo:reset\nMerged and closed PRs stay on GitHub with their [demo-delete-me] titles.",
      },
    ],
  },
] as const satisfies readonly DemoSection[];
