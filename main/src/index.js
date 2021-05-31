import { loadMicroApp } from 'qiankun';
import 'zone.js';
let app;
function mount() {
  app = loadMicroApp(
    { name: 'angular8', entry: '//localhost:1234', container: '#angular8' },
    { sandbox: { experimentalStyleIsolation: true } },
  );
}

function unmount() {
  app.unmount();
}

document.querySelector('#mount').addEventListener('click', mount);
document.querySelector('#unmount').addEventListener('click', unmount);

// loadMicroApp({ name: 'vue', entry: '//localhost:7101', container: '#vue' });
// loadMicroApp({ name: 'angular9', entry: '//localhost:7103', container: '#angular9' });
loadMicroApp({ name: 'angular8', entry: '//localhost:1234', container: '#angular8' });
// loadMicroApp({ name: 'hcm', entry: '//localhost:7107', container: '#hcm' });

