/* globals Tree */
'use strict';

var tree = new Tree(document.getElementById('tree'), {
  navigate: true // allow navigate with ArrowUp and ArrowDown
});
tree.on('open', e => console.log('open', e));
tree.on('select', e => console.log('select', e));
tree.on('action', e => console.log('action', e));
tree.on('fetch', e => console.log('fetch', e));
tree.on('browse', e => console.log('browse', e));

tree.on('fetch', folder => window.setTimeout(() => {
  tree.file({
    name: 'file 2/1'
  }, folder);
  tree.file({
    name: 'file 2/2'
  }, folder);

  folder.resolve();
}, 1000));


var structure = [
  {
  name: 'SeoulMetro',
  open: true,
  type: Tree.FOLDER,
  selected: true,
  children: [
    {
    name: '1호선',
    type: Tree.FOLDER,
    children: [{
      name: '시청역',
      type: Tree.FOLDER,
      children: [{
        name: 'WindowsAPP1',
        type: Tree.FOLDER,
        children: [{
          name: 'SensorData',
          type:Tree.FOLDER,
          children:[
            {name:'PM2.5 : 12'},
            {name:'PM10 : 35'},
            {name:'CO2 : 24'}
          ]
        }]
      }]
    }]
  },
  {
  name: '2호선',
  type: Tree.FOLDER,
  children: [{
    name: '강남역',
    type: Tree.FOLDER,
    children: [{
      name: 'WindowsAPP1',
      type: Tree.FOLDER,
      children: [{
        name: 'SensorData',
        type:Tree.FOLDER,
        children:[
          {name:'PM2.5 : 12'},
          {name:'PM10 : 35'},
          {name:'CO2 : 24'}
        ]
      }]
    }]
  }]
},
{
name: '3호선',
type: Tree.FOLDER,
children: [{
  name: '충무로역',
  type: Tree.FOLDER,
  children: [{
    name: 'WindowsAPP1',
    type: Tree.FOLDER,
    children: [{
      name: 'SensorData',
      type:Tree.FOLDER,
      children:[
        {name:'PM2.5 : 12'},
        {name:'PM10 : 35'},
        {name:'CO2 : 24'}
      ]
    }]
  }]
}]
},
  {
  name: '4호선',
  type: Tree.FOLDER,
  children: [{
    name: '사당역',
    type: Tree.FOLDER,
    children: [{
      name: 'WindowsAPP1',
      type: Tree.FOLDER,
      children: [{
        name: 'SensorData',
        type:Tree.FOLDER,
        children:[
          {name:'PM2.5 : 12'},
          {name:'PM10 : 35'},
          {name:'CO2 : 24'}
        ]
      }]
    }]
    }]
  },
    {
    name: '5호선',
    type: Tree.FOLDER,
    children: [{
      name: '까치산역',
      type: Tree.FOLDER,
      children: [{
        name: 'WindowsAPP1',
        type: Tree.FOLDER,
        children: [{
          name: 'SensorData',
          type:Tree.FOLDER,
          children:[
            {name:'PM2.5 : 12'},
            {name:'PM10 : 35'},
            {name:'CO2 : 24'}
          ]
        }]
      }]
    }]
    }



// {
//   name: 'folder 2 (asynced)',
//   type: Tree.FOLDER,
//   asynced: true
// }

]
}]; //트리구조 끝



// keep track of the original node objects
tree.on('created', (e, node) => {
  e.node = node;
});
tree.json(structure);




document.getElementById('browse-1').addEventListener('click', () => {
  tree.browse(a => {
    if (a.node.name === 'folder 2 (asynced)' || a.node.name === 'file 2/2') {
      return true;
    }
    return false;
  });
});

document.getElementById('browse-2').addEventListener('click', () => {
  tree.browse(a => {
    if (a.node.name.startsWith('folder 1') || a.node.name === 'file 1/1/1/1/2') {
      return true;
    }
    return false;
  });
});

document.getElementById('unload').addEventListener('click', () => {
  const d = tree.hierarchy().pop();
  tree.unloadFolder(d);
});

document.getElementById('previous').addEventListener('click', () => {
  tree.navigate('backward');
});
document.getElementById('next').addEventListener('click', () => {
  tree.navigate('forward');
});
