import React, { useEffect, useState } from 'react';
import './App.css';

import 'react-folder-tree/dist/style.css';

import useFetch from 'use-http';
import TypeOf from './type_of';
import Tree from './Tree';

function App() {

  const [trees, setTrees] = useState([]);
  const { get, response } = useFetch('http://localhost:3000', { }, []);

  const loadInitialEntities = async () => {
    const entities = await get('/entities/index');

    console.log(entities);
    
    if (response.ok) {
      const roots = entities.filter((cur: any) => !cur.parent);

      console.log(roots);
      

      const buildPath = (root: any, elements: Array<any>, tree: any) => {

        if (!tree) {
          tree = { id: root.id, name: root.name, type_of: root.type_of };
        }

        if (tree.type_of === TypeOf.folder) {
          tree.isOpen = true;
          tree.children = elements.filter((e:any) => parseInt(e.parent, 10) === tree.id).map((e: any) => {
            const child: {[key: string]: any} = { name: e.name, id: e.id, type_of: e.type_of };
            if (e.type_of === TypeOf.folder) {
              child.isOpen = true;
              child.children = [];
            } else {
              child.url = e.url;
            }
            return child;
          });

          tree.children.forEach((c: any) => {
            if (c.type_of === TypeOf.folder) {
              buildPath(root, elements, c);
            }
          });

        } else {
          tree.url = root.url;
        }

        return tree;
      }

      const trees = roots.map((r: any) => buildPath(r, entities, null));

      console.log(trees);

      setTrees(trees);
    }
  }

  // componentDidMount
  useEffect(() => {
    loadInitialEntities();
  }, []);

  return <div>
{
  trees.map((tree: any, index) => (
    <div key={`tree-${index}`} style={{marginTop: 5}}>
      <Tree tree={ tree } />
    </div>
  ))
}
  </div>;
}

export default App;
