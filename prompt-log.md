Prompt Log — Lab Activity #4

Project: Marinduque Explorer  
Course: Web Systems and Technologies  
Selected sector: Tourism & Cultural Innovation

Task 1 — Sector Selection

Sector: Tourism & Cultural Innovation

Local challenge: Some students and visitors may not know where to start when looking for places and local culture in Marinduque. A simple page could show a few places together and help users collect ideas for a short trip.

Target users: Local residents, students, and visitors who want to learn about places around Marinduque.

Proposed project: Marinduque Explorer, a simple website for browsing sample places and saving them in a temporary trip list.

Main features:
1. Search places by name or location.
2. Filter places by category.
3. Add places to a trip list, remove them, or clear the list.

Scope: This is a single-page frontend project using HTML, CSS, and JavaScript. It uses sample content and does not need a backend, database, login, or external API. It does not show live schedules, prices, alerts, or booking information.

Task 2 — Zero-Shot Prompting

Technique: Zero-shot prompting

Objective: Start with a short prompt and see what kind of basic page it describes.

Prompt prepared for this experiment:
Create a simple webpage for exploring tourism and cultural places in Marinduque.

What worked: The short prompt gives a basic starting page related to Marinduque.

What needs improvement: The page is static. It does not have search, category filters, or a trip list because I did not ask for them.

Next action / verification: Keep this example as the baseline, then try a structured prompt that names the users and features.

Task 3 — Improve the Prompt Using Prompt Anatomy

Technique: Structured prompt — Role, Task, Context, Constraints, Expected Output, and Acceptance Criteria

Objective: Give clearer instructions so the website matches the project idea better.

Prompt prepared for this experiment:
> Act as a frontend web developer. Create a responsive one-page website called “Marinduque Explorer” for local residents, students, and visitors who want to browse tourism and cultural places in Marinduque. The goal is to give users one simple place to explore sample destinations and save ideas for a short trip. Use semantic HTML, CSS, and plain JavaScript only. Include three features: search, category filters, and a trip list where users can add and remove places. Use demonstration content only. Do not add live schedules, prices, bookings, external APIs, frameworks, a backend, a database, or login. Provide `index.html`, `styles.css`, and `script.js`. Make the page fit mobile screens, use labels for form controls, show keyboard focus, and give buttons clear names. Acceptance criteria: the page opens locally, search and filters change the visible cards, the trip list and count update when a place is added or removed, and the layout does not require horizontal scrolling on a narrow screen.

What worked: The structured example has six sample places, search, category filters, and a trip list. The prompt also states the target users, required files, technologies, and project limits.

What needs improvement: In the first structured version, the save buttons did not identify the place they affected, and the trip list did not clearly identify its list structure in the code.

Next action / verification: Review the buttons and HTML structure before choosing a final version.

Task 4A — Few-Shot Prompting

Technique: Few-shot prompting

Objective: Give two examples to show the format I want for place information.

Prompt prepared for this experiment:
> Create four more demonstration place records for Marinduque Explorer. Follow this format:
>
> Example 1:  
> Name: Poctoy White Beach  
> Category: Beach  
> Location: Torrijos, Marinduque  
> Description: A beach destination idea for visitors who want to spend time outdoors.
>
> Example 2:  
> Name: Boac Cathedral  
> Category: Heritage  
> Location: Boac, Marinduque  
> Description: A heritage stop for people interested in local history and architecture.
>
> Make four more records using the same four fields. Keep the descriptions short and use demonstration content. Do not make up opening hours or prices. Return only the four records in the same format.

What worked: The examples show the same four fields, and the four new records follow that format. This makes the information easier to use in website cards.

What needs improvement: A matching format does not prove that every place detail is correct. The location and description should be checked before the page is used as a real travel guide.

Next action / verification: Check the place details and make sure all four fields are included in every record.

Task 4B — Role Assignment

Technique: Role assignment

Objective: Ask for a review from an accessibility point of view instead of asking for more features.

Prompt prepared for this experiment:
Act as a frontend accessibility reviewer. Review the Marinduque Explorer HTML, CSS, and JavaScript I provide. Check the headings, form labels, keyboard access, visible focus, accessible names for buttons, and the trip-list structure. Point out up to three issues you can confirm from the code. For each one, name the part of the code and suggest a small fix. Separate issues you can confirm from issues that would need browser or screen-reader testing. Do not add new features or change the project's scope.

What worked: The example review points out that the save buttons should identify which place they add or remove. It also suggests making the trip list and its entries clearer to assistive technology.

What needs improvement: A code review cannot confirm how every screen reader announces the page, so that part needs a separate test.

Next action / verification: Check the suggested changes against the source, then test keyboard use and screen-reader announcements where possible.

Task 5 — Structured Analysis and Refinement

Technique: Structured analysis and refinement

Objective: Identify a couple of code issues, make small changes, and record what was checked.

Prompt prepared for this experiment:
> Review the current Marinduque Explorer `index.html`, `styles.css`, and `script.js` against the project requirements. Check the search, category filters, add/remove/clear trip-list actions, HTML semantics, keyboard focus, button names, status messages, and mobile layout. Identify two issues you can support from the code. For each issue, identify the part that needs changing and suggest the smallest practical fix. Give a simple test procedure and expected result. Do not say a change is verified unless it has actually been tested.

**Changes made in the reference files:**
1. Save buttons now have names that include the place name and say whether the button will add or remove it.
2. The trip-list container and its items now have list roles in the HTML/JavaScript.
3. The code was kept to basic HTML, CSS, arrays, functions, and event listeners so it is easier to follow.

Checks I ran: JavaScript syntax, CSS parsing, unique HTML IDs, and links to page sections were checked. I also tested the page in Chromium by loading the same HTML, CSS, and JavaScript into a test page. Search, filtering, adding a place, removing a place, clearing the trip list, resetting the filters, keyboard activation of a save button, and screen widths from 320 to 1280 pixels worked as expected. No JavaScript errors appeared during those checks.

Limit: The environment blocked direct navigation to the local file, so I tested the source inside a Chromium test page instead. I did not test it with an actual screen reader, so I cannot confirm exactly how announcements sound with assistive technology.

What I learned: The review helped me focus on two small code changes instead of rewriting everything. The source checks and interaction checks passed, but a screen-reader test would still be useful.

Next action / verification: Before using this as a real public guide, test it in a regular browser and with a screen reader. The descriptions should also be checked against reliable local information.

Task 6 — Compare and Submit

Zero-Shot:  The short prompt gives a basic page with an introduction and three static cards, but it does not specify the interactive features or accessibility requirements. 

Structured Prompt: The detailed prompt defines the users, context, features, files, and constraints. The reference implementation adds search, category buttons, a trip list, semantic sections, and responsive styling. 

Few-Shot: The examples demonstrate a consistent record format. The four reference records all use name, category, location, and description. Consistency alone does not verify factual accuracy. 

Role Assignment: The accessibility review highlights repeated control names and unclear list semantics. Both issues can be pointed to in the original code; recommendations still need appropriate testing. 

Structured Analysis: Two small code improvements were applied. Eight static checks passed, but browser interaction and screen-reader runtime checks were not completed. 

Kapag may totoong output ka na mula sa Copilot, ipaste mo dito at gagawan kita ng sariling bersyon ng talahanayang ito para sa project mo.

Final version selected: The refined website files in the project root: `index.html`, `styles.css`, and `script.js`. A copy is saved in `outputs/05-refined-output/`.

Final reflection:

> I learned that the way I write a prompt affects what the AI gives back. A short prompt can be useful, but it may leave out features I need. Adding more details made the example closer to my project, and giving examples helped keep the place records in the same format. Asking for an accessibility review also helped me notice things in the code that I could improve. I made the button names clearer and added list roles. I checked the source files and tried the main features in Chromium. I did not test with a screen reader, so that part still needs checking. I learned that AI can help me start a project, but I still need to check its work.