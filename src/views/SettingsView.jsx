import './SettingsView.css';
import Header from '../components/Header';
import { useStoreContext } from '../context/index.jsx';

function SettingsView() {
  return (
    <div className="settings">
      <Header />
      <div className="settings-container">
        {/* Settings content will go here */}
      </div>
    </div>
  );
}

export default SettingsView;