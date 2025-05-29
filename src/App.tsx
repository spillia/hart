import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { IonApp, IonReactRouter, IonTabs, IonRouterOutlet, IonTabBar } from '@ionic/react';
import Tab1 from './components/Tab1';

const App: React.FC = () => {
  return (
    <IonApp>
      <HashRouter basename="/hart">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/" element={<Tab1 />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              {/* ... existing code ... */}
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </HashRouter>
    </IonApp>
  );
};

export default App; 