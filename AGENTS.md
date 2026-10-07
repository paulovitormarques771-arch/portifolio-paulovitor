<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep editable portfolio content in browser-safe data modules and render the one-page Portuguese portfolio through reusable section components at `/`; this separates content updates from presentation.
- Use semantic theme tokens in the global stylesheet and shared Button variants for all actions; this keeps the dark metallic visual system consistent.
- Contact form opens a prefilled email in the visitor's email application without pretending to send or store messages; server delivery requires a separately configured service.
