# Final Project Plan

## Milestone 1: Plan

Path: B - Two Medium enhancements

### Enhancement: Markdown Support

What the user will see: Users will write posts with Markdown headings, bold and italic text, lists, links, tables, and code blocks. The create and edit forms will show a formatted preview, and the post page will display the same formatting. Post cards will show readable plain-text excerpts.

Back-end changes: None. Markdown will remain plain text in the existing Post body field.

Front-end changes: Update client/src/pages/PostDetail.jsx to render Markdown. Update client/src/components/PostForm.jsx to show a preview while creating or editing a post. Update client/src/components/PostCard.jsx to remove Markdown formatting from the excerpt before applying the existing 150-character limit. Update the corresponding CSS files for headings, lists, tables, links, and code blocks. Follow the existing component and CSS structure.

New packages: react-markdown and remark-gfm for rendering, and remove-markdown for plain-text post-card excerpts. No raw-HTML plugin or optional syntax-highlighting package is planned.

What I will test:

- Headings, bold, italic, links, and ordered and unordered lists display correctly.
- Tables display correctly, and code blocks use a monospace font.
- The form preview matches the saved post page for the same body.
- Both create and edit forms show the preview, and saved formatting survives a refresh.
- HTML and script text entered in a post do not execute or become active HTML.
- Post-card excerpts remain readable and do not display Markdown formatting symbols.

### Enhancement: Search

What the user will see: The home page will have a search box and a clear button. Results will update shortly after the user stops typing and match text in post titles or bodies regardless of capitalization. An empty result will show a message, and clearing the search will restore all posts.

Back-end changes: Update the existing GET /api/posts route in server.js to accept an optional search query parameter. Escape regular-expression special characters and use a case-insensitive MongoDB query with $or across title and body. Return all posts when the search is empty or missing. Preserve the current response array, author population, and sorting. No model changes or separate search route are planned.

Front-end changes: Update client/src/pages/Home.jsx with controlled search state, a clear button, and a 300-millisecond debounce. Keep the search box visible while loading and show loading, error, and empty-result messages in the results area. Update getPosts in client/src/services/api.js to send the search parameter. Prevent outdated requests from replacing newer results. Add styles in Home.css.

New packages: None. Use React hooks and the existing Axios service.

What I will test:

- Results update after typing pauses instead of sending a request for each keystroke.
- Search finds matching titles and matching bodies, regardless of capitalization.
- Searching for a period matches a literal period, and searching for an asterisk does not cause an error or match everything.
- Clearing the search shows all posts again.
- A search without matches shows an explanatory message.
- The search box stays visible and usable while results load.
- Rapid typing does not allow an older request to overwrite the latest results.
- Visitors and logged-in users both receive search results.

### Task List

1. Review the current blog, check the existing uncommitted Home.jsx change, and verify the original features - Project week 1.
2. Finish project-plan.md, commit and push it on final-project, and submit Milestone 1 - Project week 1.
3. Install the Markdown packages and implement formatted post display, form preview, and plain-text excerpts with CSS - Project week 2.
4. Test Markdown support and commit the completed changes - Project week 2.
5. Add and test the search query in the existing posts API, then commit it - Project week 2.
6. Add the search box, debounce, request handling, and result states, then test and commit them - Project week 3.
7. Add Milestone 2 progress with task statuses, working features, commit messages, problems, and remaining work. Update AI Usage, push, and submit Milestone 2 - Project week 3.
8. Run both enhancement checklists and retest registration, login, logout, post creation, editing, deletion, and ownership restrictions. Fix failures and record final test results - Project week 4.
9. Update README with features, implementation, dependencies, setup, and the video link. Record a 1-3 minute narrated demonstration showing both enhancements and one code section - Project week 4.
10. Update AI Usage, commit and push the final work, merge final-project into main, and submit the repository URL and video link - Project week 4.

### Questions or Risks

- The current branch contains an existing Home.jsx modification. Review its Git diff before changing that file and preserve relevant work.
- Markdown previews and saved posts need consistent rendering. Use the same rendering configuration and compare them in the browser. Keep raw HTML disabled.
- Search punctuation needs literal matching. Verify the escaping against the package documentation and test punctuation through the API and browser.
- Delayed requests might display outdated results. Use request cleanup or a latest-request check, then test rapid typing.
- Changes to Home.jsx and getPosts might affect existing features. Keep the response format compatible and retest the original blog workflows.
- Confirm each submission's exact due date in Blackboard and follow those dates when assigning the project weeks.

## AI Usage

Tools: ChatGPT.

What I used them for:

- Compared the permitted enhancement options and their expected scope.

