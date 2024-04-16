import React, { useState, useEffect } from 'react';
import bugsData from './Bugs.json'; // Assuming bugs.json is in the same directory

function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    setBugs(bugsData);
  }, []);

  // Function to handle closing a bug
  const handleBugClose = (id) => {
    setBugs(prevBugs =>
      prevBugs.map(bug =>
        bug.id === id ? { ...bug, progress: 'Closed' } : bug
      )
    );
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {bugs.map(bug => (
          <div key={bug.id} style={{ width: '300px', margin: '10px', border: '1px solid #ccc' }}>
            <h3 style={{ backgroundColor: 'grey', padding: '10px', margin: '0' , color: 'white'}}>{bug.title}</h3>
            <div style={{ padding: '10px' }}>
              <p>{bug.description}</p>
              <p>Issue Date: {bug.issue_date}</p>
              <p>Progress: {bug.progress}</p>
              <p>Action Assigned To: {bug.action.assigned_to}</p>
              <p>Action Status: {bug.action.status}</p>
              <button onClick={() => handleBugClose(bug.id)} style={{width:'250px', borderRadius:'20px', height:'40px'}}>Close Bug</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;






// App.js

// import React, { useState, useEffect } from 'react';
// import './App.css'; // Import CSS for styling

// function App() {
//   const [bugHTML, setBugHTML] = useState('');

//   useEffect(() => {
//     fetch('/Bugs.xml')
//       .then(response => response.text())
//       .then(xmlData => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
//         if (xmlDoc.documentElement.nodeName === 'parsererror') {
//           console.error('Error while parsing XML:', xmlDoc.documentElement.textContent);
//           return;
//         }

//         fetch('/transform.xslt')
//           .then(response => response.text())
//           .then(xsltData => {
//             const xsltProcessor = new XSLTProcessor();
//             const xsltDoc = parser.parseFromString(xsltData, 'text/xml');
//             xsltProcessor.importStylesheet(xsltDoc);
//             const resultDocument = xsltProcessor.transformToDocument(xmlDoc);
//             if (!resultDocument) {
//               console.error('Failed to transform XML:', xmlData);
//               return;
//             }
//             const resultHTML = new XMLSerializer().serializeToString(resultDocument);
//             setBugHTML(resultHTML);
//           });
//       })
//       .catch(error => {
//         console.error('Error fetching XML or XSLT:', error);
//       });
//   }, []);

//   return (
//     <div className="container" dangerouslySetInnerHTML={{ __html: bugHTML }} />
//   );
// }

// export default App;
