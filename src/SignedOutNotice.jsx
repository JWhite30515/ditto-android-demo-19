export function SignedOutNotice({ onRetry }) {
  return (
    <div>
      <p>You've been signed out. Sign in again to continue.</p>
      <button onClick={onRetry}>Tap to retry</button>
    </div>
  );
}
