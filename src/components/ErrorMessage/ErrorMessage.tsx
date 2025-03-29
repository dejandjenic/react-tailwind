export default function ErrorMessage({ error } : { error: string | null }) {
    return <div data-testid="error">{error}</div>
}