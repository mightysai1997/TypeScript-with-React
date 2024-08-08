// Vulnerable Code
function UserProfile({ user }) {
  return <div>{user.bio}</div>; // Directly rendering user input
}
