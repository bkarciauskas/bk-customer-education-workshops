# Adopting AI Development

Facilitator outline for Grok Build Level 101, transcribed from the 101 outline document. Runbook beats for the Show sections live in `runbooks/beats/101.ts` and `runbooks.html?track=101`.

Next workshop: [Level 102](grok-build-102.md), shipping the 101 change through a pull request, review, smaller PRs, merge, and post-merge validation.

| Field | Value |
| --- | --- |
| Product | Grok Build |
| Level | 101 |
| Audience | Software engineers, developers, tech leads, founders, and EMs who are new to Grok Build or early in adoption. |
| Prerequisites | A basic understanding of AI in relation to development. |
| Approvers | Debbie Smith<br>Kristian Freeman |
| Reviewers | Dennis Chan<br>Paige Gill |
| QA | Raymond Camden |
| Status | Draft \| In Review \| **Approved** |
| Version | 1.4 |
| CHANGELOG | 2026-10-30: 1.4 Fix Router section to reflect balanced vs intelligent, remove cost.<br>2026-10-30: 1.3 Rename title to Adopting AI Development<br>2026-10-27: 1.2 Rename title to Adopting AI Development With Grok Build<br>2026-10-13: 1.1 Remove embedded runbooks from demo app in favor of Canvas<br>2026-09-15: 1.0 approved |

## Outline

## Learning objectives

By the end of this workshop, participants can:

- Map how agents shift effort across the SDLC so you can ship the same feature by end of day.
- Choose when to work AI-assisted vs agent-first.
- Use modes for the right tasks.
- Explain how Grok Build Router chooses models based on tasks.
- Apply rules and skills to ensure consistent quality.
- Complete at least one task with an agent.

## Workshop

### Facilitator assumptions

This workshop is for technical knowledge workers and developers. While some development teams may be more familiar with Grok Build, this workshop provides a foundational understanding of how to use Grok Build for AI development.

#### Recommended elements

- Favor perennial decks and adaptable demos.
   - UI changes and feature updates happen very frequently
   - It is most important to show the latest patterns and principles in practice.
- This workshop requires an **MCP server for building slides**. You can customize it based on the tools available.
- Tell your personal story of adopting Grok Build.
   - How did you learn to use it?
   - What mistakes did you make?
   - What was your “aha!” moment?
- **Stay in one agent session for the workshop.** Starting new agents for new tasks is out of scope for this workshop on fundamentals.

#### Adapt to customer

- Add slides for customer requirements but avoid screenshots.
- Bring your own demo relevant to the customer or use the default demo.
   - An effective demo is relevant to a job-to-be-done, such as refactoring, bug fixes, or feature development.
   - Align your own demo with your customer’s challenges, industry, and technology stack.
   - Plant a bug in your demo and have Grok Build fix it.
   - Align the prompts to be similar in nature to the default demo. Any prompt labeled “Reusable Prompt” denotes it is generic enough for any demo. “Prompt” must be changed for the specific demo if you are not using the default.

### Default demo instructions

- The default demo repository is github.com/xai-org/customer-education-workshops. The demo is called Ledgerly.
- It is a ledger with invoices, collections, and disputes. Originally created for consulting, it applies to a number of other industries such as financial services.
- There is a planted bug that has the wrong dispute cap. The code points to an old API instead of a new one with the correct cap.
- To install:
   - Clone the repository to your laptop.
   - In Grok Build, open the repository with a local agent. **Do not open in a Cloud Agent.**
   - Start a new chat.
   - Prompt: **Start the application.**
   - Grok Build will download the required dependencies, run the application server, open the application in the Browser view, and open runbooks (for prompts) in Canvas.
- To learn more:
   - Use /ask mode and have Grok Build explain the repository.
- To demo:
   - Go to the Runbooks Canvas (or open runbooks.html as a file in the browser). This is the Runbooks view with a catalog of demo beats.
   - Select the 101 track.
   - Copy the prompts and follow the demo workflow for each section.
- To cleanup:
   - /reset-demo-state
   - Delete the personal rule in Customize > Rules.
   - Delete the personal skill in Customize > Skills.
   - Remove slides from Figma.
   - Go to Settings > Agents > Executions & Approvals > Run Mode > Auto-Review.

### Pre-flight checklist

- Use a cursor.sh login and the ADM/FE team in Cursor.
   - Figma MCP server enabled
- Reset demo in Grok Build.
   - Delete the personal rule in Customize > Rules.
   - Delete the personal skill in Customize > Skills.
   - Turn off the application server and clean up the chats.
   - Remove slides from Figma.
   - Go to Settings > Agents > Executions & Approvals > Run Mode > Auto-Review.
- Open Google Slides in full screen. If multiple screens, put the presenter view with speaker notes on an unshared screen.
- Open Grok Build in full screen.
- Change Grok Build to light mode if possible. This ensures better viewing for virtual presentations.
- Check font size for Grok Build.
- Share only one window at a time.
- When not using the left panel to browse agents, collapse during demo.
- Pull up the pre-recorded sample as a demo fallback.

### Workshop structure

- Section 1: Welcome: slide 1
- Section 2: Agenda: slides 2-3
- Section 3: How do you use AI in the SDLC?: slides 4-8
- Section 4: What is Grok Build?: slides 9-17
- Section 5: How do you work with an agent?: slides 18-20
- Section 6: How do you govern an agent?: slides 21-24
- Section 7: Try it: slide 25
- Section 8: Resources: slides 26-27

### Welcome

- **Intent:** Prepare the room and outcome.
- **Features:** Grok Build Desktop download; Agent Window.
- **Media:** none.

#### Say - 1

- Welcome.
- I want you to imagine that you are a new team member of {INSERT COMPANY HERE, default is Ledgerly}, a fictitious company.
- You’ve been tasked to develop a feature as quickly as possible.
- How do you get this done by the end of day?

### Agenda

- **Intent:** Name outcomes, not feature inventory.
- **Features:** Agent Window; Modes; Router; Rules; Skills.
- **Media:** none.

#### Say - 2

- Today, you’re going to use Grok Build to change one thing in your repository by the end of the day.
- We will…
   - Map how agents shift effort across the SDLC so you can ship the same feature by end of day.
   - Choose the right mode and model for each task so you get speed without sacrificing judgment.
   - Choose when to work AI-assisted vs agent-first so you stay in control of quality.
   - Put rules and skills in place so quality stays consistent without re-explaining
   - Finish at least one real task with an agent and know how to judge the result.

#### Say - 3

- As part of your onboarding, you’ll need to download Grok Build and open a project you know well.
- If you’re an administrator, connect source control in the integrations dashboard.

#### Tell - 4

- Now that you are set up, let’s think about how AI changes the way you build software.

### How do you use AI in the SDLC?

- **Intent:** Explain why participant work changes.
- **Features:** None

#### Say - 5

- As a new team member, you may spend quite a bit of time writing and reviewing your code.
- Your team members might help with plan, design, test, and deploy but most of the time is spent building the feature.

#### Say - 6

- Let’s introduce AI as part of our workflow.
- As you code, AI provides suggestions and helps you write it.
- AI reduces the time to write and review the code.
- That shifts the effort for your team to plan, design, test, and deploy.

#### Say - 7

- Over time, as you become more comfortable with AI, you’ll start moving tasks in each phase into agents like Grok Build and reducing the time spent in each phase.

#### Say - 8

- This is a journey. Today we focus on one synchronous agent to help you push that feature to production.
- The software factory is the destination, where you have multiple agents, multiple tasks, all running asynchronously.

#### Tell - 9

- It would help to have some AI tooling that helps you code and evolve with your way of working as you move toward a software factory.
- At {INSERT COMPANY HERE, default is Ledgerly}, you can use Grok Build to help you write and review code faster and automate some of the other parts of the SDLC.

### What is Grok Build?

- **Intent:** An AI harness like Grok Build involves model and context management.
- **Features:** Modes: Ask, Plan, Agent, Debug. Context; Instructions; Router; Agent Window.

#### Say - 10

- An AI harness like Grok Build involves model and context management.
- Four levers decide outcomes.
   - Model: program that recognizes patterns
   - Instructions: your prompt, plus rules and skills
   - Context: files, code, docs, and errors
   - Tools: edit, run commands, search, call MCP

#### Say - 11

- Grok Build runs agents.
- An agent is an AI application that runs a loop.
   - Understand: ask about relevant context
   - Plan: plan steps and files to touch
   - Act: build code, edit files, and run commands
   - Verify: debug problems, check work
- Loop until done.

#### Say - 12

- These map to modes in Grok Build - Ask, Plan, Agent, and Debug

#### Say - 13

- Do I need a plan? Depends on the type of change.
- Well-scoped changes can go straight to agent mode.

#### Say - 14

- You describe outcomes
- Agent writes the code
- You judge the results

#### Say - 15

- I mentioned that Grok Build is an AI harness that runs an agent, but how do you use it?
- You can use Grok Build on a variety of platforms and in different ways, including CLI
- Today we are going to use Desktop.

#### Say - 16

- Besides agents, you often hear quite a bit about model selection.
- Your model selection playbook is something you might do manually.
   - Choose a default model for daily use that balances cost and intelligence.
   - Consider a faster model when the work is simple/repetitive and the default feels unnecessarily slow or expensive.
   - Move up to a more intelligent model when the work requires more reasoning or default or faster models miss.

#### Say - 17

- In Grok Build, this is handled for you by the Router.
   - Auto is the default. It chooses between faster and intelligent models depending on the type of task.
   - It routes to your organization’s approved models.
   - Balanced mode optimizes for daily use.
   - Chooses a faster model when the work is simple/repetitive.
   - Moves up to a more intelligent model when the task requires more reasoning.

#### Show - 17

Use local agents only, stay in one chat for the entire workshop.

1. Let’s implement the feature.
   - Do: Open Grok Build for desktop.
   - Do: Show agent window.
   - Say: Grok Build is also available in CLI and has an SDK.
1. I got access to the application repository and I’ll add it to Grok Build.
   - Do: Open the repository in the agent window.
   - Say: By adding a repository, we’re giving the agent context to use in its work.
   - Do: Start a new agent in a workspace.
1. Let’s start the application and look at the UI.
   - Reusable Prompt: Start the application.
   - Do: Wait while Grok Build installs dependencies and runs the application.
1. Now, I want to learn more about this code since I’m not familiar with it.
   - Say: Let’s learn more about the application with Ask mode.
   - Reusable Prompt: /ask Tell me what this application does in 3 sentences
1. Let’s build the feature. According to my teammate, we need a way to update the customer email address in the application.
   - Say: Map your approach to building a new feature in Plan mode.
   - Prompt: /plan I want a new feature to update the customer email in the invoice detail customer card. Don’t implement email validation.
1. I like the plan. I’ll go ahead and build the feature.
   - Say: Build the feature in Agent mode.
   - Do: Build the plan locally. Check the feature in the UI.
1. I deployed the feature but my teammate reported a failing test.
   - Say: Investigate the failing test using Debug mode.
   - Reusable Prompt: /debug the failing test
   - Say: Debug mode is useful because the agent investigates the codebase and presents some hypothesis on the root cause.
   - Say: I can choose to reproduce the bug and attempt to fix based on the agent’s hypotheses.
1. This should be a pretty small change and I don’t need to do any complex planning.
   - Say: Check the models available for use.
   - Do: Select Auto in the chat and review the models available for use.
1. I’ll go back to Agent mode to plan how to fix the bug.
   - Do: Use shift-tab to toggle to Agent mode.
   - Prompt: Fix the failing test.
1. By the end of day, I built a small feature, tested, and fixed a bug.

##### Check for understanding

- If participants are following along, check how they are doing.
- Solicit the room for questions on model and modes.

##### Failure modes

- If the demo fails, fallback to pre-recorded video.

#### Tell - 18

- You wrote your first prompt in Grok Build and built a feature.
- As you use Grok Build some more, you realize that sometimes you want to stop the agent and review its work.

### How do you work with an agent?

- **Intent:** Different ways of steering the agent as you work.
- **Features:** Agent window, Stop, Checkpoints, Run mode

#### Say - 19

- You can be more or less involved with your agent
- Review, approve, rewind.
   - Review: Changes arrive as diffs
   - Approve: Run mode sets level of auto-approval
   - Rewind: Checkpoints let you restore
- Stop as needed. Approve the changes or redirect the agent. Rewind if incorrect.

#### Say - 20

- You can choose two ways to work with your agent
   - AI-assisted
      - You drive, agent assists
      - Best for small, well-defined changes
      - Edit inline with autocomplete
   - Agent-first
      - You direct, agent drives
      - Best for multi-file work and anything you hand off
      - Use Agent mode

#### Show - 20

Use local agents only, stay in one chat for the entire workshop.

Prompts are not fixed. They will depend on the demo.

1. I want more control over what my agent is doing.
   - Say: Let’s change how our agent asks for approvals by configuring an allowlist - a known set of commands that Grok Build can run without asking for review.
   - Do: Go to Settings > Agents > Executions & Approvals > Run Mode > Allowlist.
1. I built the feature and want to verify it exists.
   - Do: Go to http://localhost:43173/invoices/inv_1048.
   - Do: Find the edit email feature you implemented in the Customer box.
1. I have to update the email feature. The security team recommended we redact a portion of the customer email.
   - Prompt: Redact the customer email in the UI. The first two characters and domain are plaintext. When I click to type in the box, clear it and save the new email.
   - Do: Stop the prompt with the Stop button in the chat.
1. I received feedback that we can redact the whole thing and use a show/hide feature.
   - Say: Steer the prompt.
   - Prompt: Redact the customer email in the UI. Show it in plaintext when I click the box to edit it. Stop every time you change a file for me to review.
   - Do: Show how the agent pauses for your approval. Continue running after reviewing the first file.
   - Prompt: Continue to the end, do not wait for my approval.
1. After it is done building, I can check the diffs.
   - Do: Select Changes in the right hand panel. Show diffs from agent’s last turn.
1. If I want to revert the code, I can restore from a checkpoint.
   - Say: If I want to revert the code, I can restore from a checkpoint.
   - Do: Scroll back to a prompt before updating the feature. Select the restore icon next to the prompt.

##### Check for understanding

- If participants are following along, check how they are doing.
- Solicit the room for questions on steering, stopping, and soliciting approvals.

##### Failure modes

- If the demo fails, fallback to pre-recorded video.

#### Tell - 21

- You learned to steer your agent and stop it for your approval. You’ll also change how you work with your agent depending on the task.
- As you continue using your agent, you keep repeating prompts to the agent and reminding it how to do something.
- How do you instruct your agent on what to do, how to do it, and where to access other information?

### How do you govern an agent?

- **Intent:** Adding guardrails provides better outcomes.
- **Features:** Agent window; Skills; Rules; MCP Servers; Canvas; enterprise controls overview

#### Say - 22

- Rules and skills
   - Guardrails that apply per user, project, team, or organization
   - Rules: instructions for what must be done
   - Skills: instructions for how to do

#### Say - 23

- Canvas and MCP
   - Canvas: live surface the agent builds while you watch, good for tracking work
   - MCP: connect to external tools and more context

#### Say - 24

- If you notice you have rules, skills, or MCP servers added already, your organization sets it up for you.
- Grok Build has strong enterprise controls, this is a non-exhaustive list.
   - Identity and access
      - Role-based access control (RBAC)
      - Feature gates
   - Privacy and data governance
      - Privacy mode
      - Data residency options
   - Agent and model controls
      - Enforceable rules
      - Model access restrictions
      - MCP trust management
   - Marketplace governance
      - Plugin access
      - SCIM-scoped distribution

#### Show - 24

Use local agents only, stay in one chat for the entire workshop.

Prompts are not fixed. They will change depending on the demo and available MCP server.

1. While the team reviewed your change, they expressed concerns that the agent may generate code that changes the names and fields on the invoice UI.
   - Say: Let’s create a user rule so the agent doesn’t try to improve the invoice UI without our approval.
   - Say: Use /create-rule, a built-in skill, to create a rule.
   - Prompt: /create-rule Preserve the invoice view. Do not rename, restyle, or rearrange invoice screens unless the user names the **exact** new copy (or a specific layout change). This is a personal rule.
   - Do: Go to Customize > Rules > User to view the rule.
   - Prompt: Change "Line Items" in the UI to something else.
1. For the future, I want to be able to use a domain-driven design approach and check which APIs align with the domain.
   - Say: Let’s create a user skill that tells me the domain breakdown and available APIs.
   - Prompt: /create-skill Use domain-driven design to break down the domains in this application and match it to available APIs or data schemas. This is a personal skill.
   - Do: Go to Customize > Skills to view the skill.
   - Prompt: Use domain-driven design on this application. Do not edit files.
1. I did a lot of work as part of this session but I can’t keep track of what happened.
   - Say: Use Canvas to generate interactive artifacts that render next to the chat.
   - Reusable Prompt: Create a canvas explaining what we did today.
1. Art of the possible: I have to showcase this to leadership in a slideshow.
   - Say: Ask Grok Build to create a slideshow in Figma using MCP Servers.
   - Do: Find an MCP server for slideshow generation in Grok Build. Go to Customize > MCPs > Figma.
   - Prompt: Create three slides in Figma Slides outlining how I used Grok Build to develop a new feature. I want to use this as part of my demo showcase.

##### Check for understanding

- If participants are following along, check how they are doing.
- Solicit the room for questions on skills, rules, and MCP. Timebox to three minutes maximum and offer to take them async.

##### Failure modes

- If privacy mode is enabled on the account and the user is not allowed to create rules via chat, show how to manually add the rule by UI.
   - Prompt: Show me the rule so I can add it manually.
   - Do: Go to Customize > Rules > User.
   - Do: Add a new rule.
   - Do: Paste the rule and save.
- If Figma has run out of seat limits, switch to another MCP server to generate slides. After the demo, you can request additional usage in #it-help.
- If the demo fails, fallback to pre-recorded video.

#### Tell - 25

- As you build more and more features, you’ll add more skills, rules, and tools to customize your agent on how you like to work.
- Now that we’ve finished building a new feature at {INSERT COMPANY HERE, default is Ledgerly} in less than an hour, give it a try and practice what you’ve learned.

### Try it

- **Intent:** A call to action.
- **Features:** none.

#### Say - 25

- Try it
   - Open a project you know.
   - Give the agent one task and a definition of done.
      - Keep the Lights On
      - Refactor
      - Innovate
   - Read the diff before you approve.
- Example: `Fix <bug> in <file>. Follow the patterns in this repo. Done when tests pass.`

### Resources

- **Intent:** A list of resources you can use for more information.
- **Features:** none.

#### Say - 26

##### Resources

- Grok Build Docs: cursor.com/docs
   - AI Docs Assistant
   - "Grok Build Learn" Track
- Grok Build Workshops: cursor.com/workshops
- Best Practices Blog: cursor.com/blog/agent-best-practices
   - Updated guidance
- Next workshop: [Grok Build 102](grok-build-102.md)
