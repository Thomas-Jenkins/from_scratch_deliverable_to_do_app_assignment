import Auth from '../Auth/Auth';

export default function Nav() {
  return (
    <div className="nav-bar">
      <div>
        <h1>Welcome!</h1>
        <h2> What do you need to do today?</h2>
      </div>
      <div>
        <Auth />
      </div>
    </div>
  );
}