import React from 'react';
import TodoBox from './views/index.jsx';

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
const app = createRoot(document.getElementById("app"));
app.render(<TodoBox data={data} />);