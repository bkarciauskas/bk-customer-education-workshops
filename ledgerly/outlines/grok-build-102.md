
# Adopting AI Development

Facilitator outline for Grok Build Level 102. It continues [Level 101](grok-build-101.md) and takes the 101 change through shipping. Runbook beats for the Show sections live in `runbooks/beats/102.ts` and `runbooks.html?track=102`.

| Field | Value |
| --- | --- |
| Product | Grok Build |
| Level | 102 |
| Audience | Software engineers, developers, tech leads, founders, and EMs who finished Grok Build 101 and want to ship agent work through pull requests. |
| Prerequisites | [Grok Build 101](grok-build-101.md), or working knowledge of modes, Router, rules and skills, and steering the agent (Stop, Run mode, checkpoints). A GitHub account that can push to the demo repository. |
| Approvers | Debbie Smith<br>Kristian Freeman |
| Reviewers | Dennis Chan<br>Paige Gill |
| QA | Raymond Camden |
| Status | **Draft** \| In Review \| Approved |
| Version | 1.0 |
| CHANGELOG | 2026-11-02: 1.0 Draft. PR lifecycle: raise a PR, resolve review comments with the agent and Bugbot, split into smaller PRs, merge, validate after merge. |

## Outline

## Learning objectives

By the end of this workshop, participants can:

- Open a pull request from Grok Build for a completed local change and describe what the agent owns and what GitHub owns.
- Triage and resolve PR review comments with the agent and Bugbot findings without losing control of the diff.
- Split an oversized change into smaller PRs, stacked or independent, and merge them in a safe order.
- Recover when checks or review block one slice of a stack.
- Validate after merge so merged is not treated as done.

## Workshop

### Facilitator assumptions

This workshop is for developers who already finished one task with an agent. 101 kept the work on a laptop. 102 takes the same work through review and merge, the way it ships on a real team.

#### Recommended elements

- Favor perennial decks and adaptable demos.
   - PR, review, and Bugbot UI changes frequently.
   - It is most important to show the review loop and the judgment calls, not where a button is today.
- Tell your personal story of shipping agent work.
   - What did your first agent-written PR look like?
   - Which review comment did the agent get wrong?
   - When did you first split a PR because it was too big?
- **Use local agents for the demo.** Start a new agent for each section so each one has a focused context. Cloud Agents are out of scope unless you want to show `/autopilot` watching a PR.
- **Keep one story.** Every PR in this workshop comes from the 101 change. Do not turn it into a feature tour.

#### Adapt to customer

- Add slides for the customer’s review process (required reviewers, required checks, merge method) but avoid screenshots.
- Bring your own demo relevant to the customer or use the default demo.
   - An effective demo has one change that is obviously too big: an unrelated fix mixed into a feature.
   - Align review comments with what the customer’s reviewers actually ask for.
   - Align the prompts to be similar in nature to the default demo. Any prompt labeled “Reusable Prompt” denotes it is generic enough for any demo. “Prompt” must be changed for the specific demo if you are not using the default.
- If the customer merges into `main` directly, say so when you show the practice base branch.

### Default demo instructions

- The default demo repository is github.com/xai-org/customer-education-workshops. The demo is called Ledgerly.
- 102 starts from the 101 change: the customer email editor on the invoice detail page, the email redaction, and the fix for the failing suggested-credit test. Together they are one change that is too big for one PR.
- You need push access to the repository. Use your own fork or copy of the demo if you cannot push to the workshop repository.
- PRs merge into a practice base branch, `demo/delete-me-102-base`, not `main`. The demo reset deletes it with the other demo branches.
- Name every presenting PR with a `[demo-delete-me]` title and every branch with `demo/delete-me-102-`, so cleanup finds them.
- Review comments are seeded by the facilitator. You play the reviewer and leave three comments from the runbook card. Bugbot is optional. If it is not enabled, the change reviewer subagent stands in.
- To install:
   - Clone the repository to your laptop.
   - In Grok Build, open the repository with a local agent. **Do not open in a Cloud Agent.**
   - Start a new chat.
   - Prompt: **Start the application.**
- To demo:
   - Go to the Runbooks Canvas (or open runbooks.html as a file in the browser).
   - Select the 102 track.
   - Copy the prompts and follow the demo workflow for each section.
- To cleanup:
   - Switch to `main` and run /reset-demo-state. It deletes the recorded demo branches locally and on GitHub.
   - Merged and closed PRs stay on GitHub. Their `[demo-delete-me]` titles mark them as throwaway.

### Pre-flight checklist

- Use a cursor.sh login and the ADM/FE team in Cursor.
   - GitHub connected in the integrations dashboard.
   - Bugbot enabled on the demo repository (optional).
- Run `preflight-checker track 102`.
- Reset demo in Grok Build.
   - Delete leftover `demo/delete-me-102-*` branches and close leftover `[demo-delete-me]` PRs.
   - Turn off the application server and clean up the chats.
   - Go to Settings > Agents > Executions & Approvals > Run Mode > Auto-Review.
- Prepare the 101 change, or plan to rebuild it with the first runbook card.
- Open Google Slides in full screen. If multiple screens, put the presenter view with speaker notes on an unshared screen.
- Open Grok Build and GitHub in full screen, in light mode if possible.
- Check font size for Grok Build and GitHub.
- Share only one window at a time.
- Pull up the pre-recorded sample as a demo fallback.

### Workshop structure

- Section 1: Welcome: slide 1
- Section 2: Agenda: slides 2-3
- Section 3: When is a change ready to ship?: slides 4-6
- Section 4: How do you raise a PR?: slides 7-9
- Section 5: How do you resolve review comments?: slides 10-12
- Section 6: How do you split a big change?: slides 13-15
- Section 7: How do you merge and validate?: slides 16-18
- Section 8: Try it: slide 19
- Section 9: Resources: slides 20-21

### Welcome

- **Intent:** Prepare the room and outcome.
- **Features:** Agent Window.
- **Media:** none.

#### Say - 1

- Welcome back.
- In 101, you joined {INSERT COMPANY HERE, default is Ledgerly} and built a feature with an agent by the end of the day.
- That feature only exists on your laptop.
- How do you get it reviewed, merged, and working for everyone else?

### Agenda

- **Intent:** Name outcomes, not feature inventory.
- **Features:** Agent Window; Bugbot; Subagents.
- **Media:** none.

#### Say - 2

- Today, you’re going to ship the change you built in 101.
- We will…
   - Raise a PR from Grok Build that a coworker can review quickly.
   - Resolve review comments with the agent and Bugbot, and decide which ones get a code change.
   - Split a big change into smaller PRs and merge them in a safe order.
   - Validate after merge so merged means done.

#### Say - 3

- You need Grok Build with GitHub connected, and push access to a repository you know.
- If you’re an administrator, connect source control in the integrations dashboard and enable Bugbot for the repository.

#### Tell - 4

- Before we open a PR, let’s agree on what done means.

### When is a change ready to ship?

- **Intent:** Bridge from 101. Local done is not merged.
- **Features:** None.

#### Say - 4

- In 101, done meant the feature worked and the test passed on my laptop.
- On a team, done means:
   - Reviewed: someone else read the diff.
   - Merged: it is on the shared branch.
   - Validated: it still works after merge.

#### Say - 5

- Who owns what?
   - Grok Build: branch, commits, PR title and body, and fixes for the comments you accept.
   - GitHub: review threads, checks, and the merge.
   - You: what ships, which comments get a change, and when a thread is resolved.

#### Say - 6

- In 101, we stayed in one agent session.
- For shipping, start a new agent for each stage. Each one gets the context it needs: the diff, the review comments, or the merged branch.

#### Tell - 7

- Let’s turn the 101 change into a PR.

### How do you raise a PR?

- **Intent:** Open a PR a coworker can review quickly.
- **Features:** Agent Window; Ask mode; Agent mode; GitHub integration.

#### Say - 8

- A good PR has:
   - One concern.
   - A title that says what changes.
   - A body with what changed, how to test it, and what a reviewer should check.
- The agent can write all of that. You still read it before you send it.

#### Say - 9

- In your own repository, the PR goes into `main`.
- Today, we use a practice base branch so the demo can be reset.

#### Show - 9

Use local agents only. Start a new agent for this section.

1. I built the email feature and fixed a test in 101. Nobody has seen it yet.
   - Say: 102 picks up where 101 ended: a working change on my laptop that nobody else has seen.
   - Do: Open a new local agent on main. If you kept the 101 changes, skip the prompt. Otherwise rebuild them.
   - Prompt: Add an edit email control to the invoice detail customer card. Redact the email and show it in plaintext when I click the box to edit it. Fix the failing test.
1. I need a branch to merge into.
   - Say: In your own repository the base is main. In the workshop repository we merge into a throwaway base so the demo reset can remove it.
   - Do: `git switch -c demo/delete-me-102-base main`
   - Do: `git push -u origin demo/delete-me-102-base`
   - Do: `npm run demo:session -- record branch demo/delete-me-102-base --remote`
1. Before I open a PR, I want to know what is in it.
   - Say: Local done is not merged. Before I open a PR, I want to know what is in the diff and whether it belongs together.
   - Reusable Prompt: /ask Summarize the uncommitted changes by file and concern. Flag anything that should not ship in the same PR.
   - Say: The agent flags the suggested-credit fix as a separate concern. Keep that in mind. A reviewer will notice too.
1. Let’s open the PR.
   - Say: The agent writes the branch, commit, and PR body. GitHub owns review, checks, and merge.
   - Prompt: Create branch demo/delete-me-102-email from demo/delete-me-102-base, commit these changes with a clear message, push it, and open a PR into demo/delete-me-102-base. Title it [demo-delete-me] Edit and redact the customer email. In the body, list what changed, how to test it, and what a reviewer should check.
   - Do: `npm run demo:session -- record branch demo/delete-me-102-email --remote`
1. Let’s read it the way a coworker would.
   - Say: The PR body is the first thing a coworker reads. If it does not say how to test the change, fix it now.
   - Do: Open the PR on GitHub. Read the title, the body, and the Files changed tab.

##### Check for understanding

- If participants are following along, check how they are doing.
- Solicit the room for questions on what the agent owns and what GitHub owns.

##### Failure modes

- If the push is rejected, the account cannot push to the repository. Switch to your fork and repeat the base branch step.
- If the agent cannot open the PR, GitHub is not connected. Open it in the GitHub UI from the pushed branch and keep going.
- If the PR targets `main`, change its base to `demo/delete-me-102-base` in the GitHub UI.
- If the demo fails, fallback to pre-recorded video.

#### Tell - 10

- The PR is open. A coworker reviewed it and left comments.

### How do you resolve review comments?

- **Intent:** Close the review loop without losing control of the diff.
- **Features:** Agent Window; Bugbot; change reviewer subagent; Ask mode; Changes panel.

#### Say - 11

- The review loop:
   - Read: every thread and finding.
   - Triage: fix here, split out, or reply without a change.
   - Fix: one commit per comment, reviewed before push.
   - Reply and re-request review.

#### Say - 12

- Bugbot is a reviewer that runs on your PR.
   - Each finding has a file, a line, and a reason.
   - Treat findings like comments from a coworker: some are right, some need a reply.
- If your organization uses review subagents, they work the same way. Ledgerly has a change reviewer subagent.

#### Show - 12

Use local agents only. Start a new agent for this section and check out the PR branch.

1. A coworker reviewed my PR. In the workshop, I play the reviewer.
   - Say: In the workshop, I play the reviewer. On your team, a coworker leaves these.
   - Do: On GitHub, open Files changed and start a review.
   - Do: On the email save code, comment: “Reject an empty email and keep the previous value.”
   - Do: On the redaction code, comment: “Add a unit test for the redaction.”
   - Do: On the PR, comment: “This mixes the suggested-credit v2 migration with the email feature. Please split it.”
   - Do: Submit the review with Request changes.
1. [Optional - Bugbot] Let’s get a second review from Bugbot.
   - Say: Bugbot is structured review: each finding has a file, a line, and a reason. Treat it like a reviewer, not an oracle.
   - Reusable Prompt: /review-bugbot this PR
1. If Bugbot is not enabled, use the change reviewer.
   - Do: If Bugbot is not enabled on this repository, use the project's change reviewer subagent instead.
   - Reusable Prompt: Use the change reviewer subagent to review this PR. List each issue with its file, line, and severity.
1. I don’t want to fix every comment blindly.
   - Say: The agent drafts the triage. I decide which comments get a code change.
   - Reusable Prompt: /ask Read the open review comments and Bugbot findings on this PR. For each one, say whether to fix it in this PR, split it into another PR, or reply without a change, and why.
1. I’ll fix the comments I accepted, and review each change.
   - Say: Same steering as 101: stop before the push so I review every diff.
   - Reusable Prompt: Fix the review comments we agreed to fix in this PR, one commit per comment. Stop before you push so I can review the diffs.
   - Do: Select Changes in the right hand panel. Review each commit.
   - Reusable Prompt: Push the commits and reply on each thread with the commit that fixes it.
1. Back to the reviewer.
   - Say: A thread is resolved after a person checks the fix, not when the agent says it is done.
   - Do: On GitHub, resolve the fixed threads and re-request review. Leave the split comment open.

##### Check for understanding

- If participants are following along, check how they are doing.
- Solicit the room for questions on triaging comments and Bugbot findings.

##### Failure modes

- If Bugbot is not enabled or has no findings, say so and use the change reviewer subagent. No findings is a valid result.
- If the agent cannot read the review threads, paste the comment text into the prompt.
- If the agent pushes before you review, show the diff on GitHub and revert the commit you do not accept.
- If the demo fails, fallback to pre-recorded video.

#### Tell - 13

- One comment is still open: the PR is too big. Let’s split it.

### How do you split a big change?

- **Intent:** Decompose risk into PRs a reviewer can approve alone.
- **Features:** Agent Window; Plan mode; Agent mode.

#### Say - 14

- Why split?
   - Review time grows with the size of the diff.
   - A small PR is easier to revert.
   - One blocked slice does not hold up the others.

#### Say - 15

- Where to cut:
   - An independent fix: ships alone, based on the main branch.
   - A foundation: data or API that the feature needs.
   - The feature: stacked on the foundation.
- Stacked PRs target the PR below them, so each diff shows only its own change.
- Do not squash slices back together across PRs.

#### Show - 15

Use local agents only. Continue in the agent on the PR branch.

1. The reviewer asked me to split the PR.
   - Say: Slice by what a reviewer can approve alone: an independent fix, a foundation, then the feature on top.
   - Reusable Prompt: /plan Split this PR into smaller PRs that each build, pass tests, and can be reviewed alone. Keep the review fixes. Name the slices, the files in each, the merge order, and which slices stack on another.
1. Let’s check the plan before building it.
   - Say: Independent PRs target the base. A stacked PR targets the slice below it, so its diff shows only its own change.
   - Do: Check that each slice has its own tests and that no file is split across slices unless it has to be. Expect the suggested-credit migration as its own slice.
1. I like the plan. Let’s open the smaller PRs.
   - Do: Click Build Locally.
   - Prompt: Build the plan. Create one branch per slice named demo/delete-me-102-<slice> and open a PR for each with a [demo-delete-me] title. Base independent slices on demo/delete-me-102-base and stacked slices on the slice below. Link the PRs to each other in their bodies.
   - Do: Record each branch: `npm run demo:session -- record branch demo/delete-me-102-<slice> --remote`
1. The original PR is replaced.
   - Say: Review threads do not move to the new PRs. Link back so the reviewer can find the history.
   - Reusable Prompt: Close the original PR with a comment that links the smaller PRs that replace it.

##### Check for understanding

- If participants are following along, check how they are doing.
- Solicit the room for questions on where to cut slices and when to stack.

##### Failure modes

- If two slices need the same file, move that file into the lower slice.
- If a slice does not pass tests alone, it is not independent. Stack it or merge it into its neighbor.
- If the plan splits into more than three slices, ask for fewer. More PRs is not always smaller review.
- If the demo fails, fallback to pre-recorded video.

#### Tell - 16

- The smaller PRs are open and approved. Let’s merge them.

### How do you merge and validate?

- **Intent:** Finish the job. Merged is not done.
- **Features:** Agent Window; Ask mode; Debug mode; Browser.

#### Say - 17

- Merge in order, one slice at a time.
- After each merge, update the next stacked PR to its new base.
- If a slice is blocked, stop the stack there. The slices already merged are safe.

#### Say - 18

- After merge, check:
   - Tests on the merged branch.
   - The feature in the app.
   - Anything the PR descriptions promised that is not done yet.

#### Show - 18

Use local agents only. Start a new agent for this section.

1. Which PR goes first?
   - Reusable Prompt: /ask For each of my open [demo-delete-me] PRs, list its base, checks, review status, and merge order. Tell me which one is safe to merge first.
1. Let’s merge the first slice.
   - Say: Merge one slice at a time. After each merge, the next stacked PR needs a new base.
   - Do: On GitHub, merge the first PR in the order. Use the repository's merge method.
1. The next PR is stacked on something that changed.
   - Say: If checks fail or a reviewer blocks a slice, stop the stack there. Fix that slice. The slices already merged are safe.
   - Reusable Prompt: The first slice merged. Rebase the next stacked PR onto its new base, change the PR base to match, and push. Tell me if anything conflicts.
1. Let’s merge the rest.
   - Do: Merge each remaining PR in order after its checks pass and its review is approved.
1. Everything merged. Is it done?
   - Say: Merged is not done. I check the merged branch the way a user and a teammate would.
   - Prompt: Check out demo/delete-me-102-base and pull. Run the tests and start the application. Confirm each merged PR does what its description says, and list anything that is not done.
   - Do: Go to http://localhost:43173/invoices/inv_1048. Edit the email in the Customer box.
   - Do: Go to http://localhost:43173/disputes/dsp_1043. The suggested credit reads $249.00 because the v2 migration merged.
1. If validation found a problem, debug it on the merged branch.
   - Do: Only if validation found a problem.
   - Reusable Prompt: /debug what changed in the last merge that causes this failure
1. Let’s clean up.
   - Do: `git switch main`
   - Do: `npm run demo:reset`
   - Do: Merged and closed PRs stay on GitHub with their [demo-delete-me] titles.
1. By the end of day, I shipped the 101 feature in reviewed, smaller PRs and checked it after merge.

##### Check for understanding

- If participants are following along, check how they are doing.
- Solicit the room for questions on merge order, stacking, and validating after merge.

##### Failure modes

- If a stacked PR shows commits that already merged, rebase it onto its new base.
- If a rebase conflicts, let the agent resolve it, then read the resolved files before you push.
- If validation finds a regression, revert that slice’s merge on GitHub and open a fix PR.
- If the demo fails, fallback to pre-recorded video.

#### Tell - 19

- You took one change from your laptop to a merged, validated branch.
- Now that you’ve shipped a feature at {INSERT COMPANY HERE, default is Ledgerly} through review, give it a try on your own repository.

### Try it

- **Intent:** A call to action.
- **Features:** none.

#### Say - 19

- Try it
   - Open a project you know with a branch that has local changes.
   - Pick one:
      - Open a PR with a body that says how to test it.
      - Resolve one review comment or Bugbot finding with the agent.
      - Split a messy branch into two PRs and merge them in order.
   - Validate after merge.
- Example: `Open a PR for this branch. In the body, list what changed, how to test it, and what a reviewer should check.`

### Resources

- **Intent:** A list of resources you can use for more information.
- **Features:** none.

#### Say - 20

##### Resources

- Grok Build Docs: cursor.com/docs
   - Bugbot: cursor.com/docs/bugbot
   - AI Docs Assistant
- Grok Build Workshops: cursor.com/workshops
- Best Practices Blog: cursor.com/blog/agent-best-practices
- Previous workshop: [Grok Build 101](grok-build-101.md)
