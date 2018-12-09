var scene, sceneW, sceneH, sceneAR, scenePR,

    camera, renderer,

    boxGeometry, boxBasicMaterial, boxLambertMaterial, boxMesh,

    ambientLight, pointlight;




function getSceneDimentions() {
    scenePR = window.devicePixelRatio;
    sceneW = window.innerWidth;
    sceneH = window.innerHeight;
    sceneAR = sceneW / sceneH;
}

function animateScene() {
    requestAnimationFrame( animateScene );

    boxMesh.rotation.x = boxMesh.rotation.y += 0.01;

    renderer.render( scene , camera );
}

function init() {
    getSceneDimentions();

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 35 , sceneAR , 0.1 , 3000 );
    camera.position.set( 0 , 0 , 0 );


    boxGeometry = new THREE.BoxGeometry( 100 , 100 , 100 );
    boxBasicMaterial = new THREE.MeshBasicMaterial({ color: 0xCCFF00 , wireframe: !true });
    boxLambertMaterial = new THREE.MeshLambertMaterial({ color: 0xccff00 });
    boxMesh = new THREE.Mesh( boxGeometry , boxLambertMaterial );
    boxMesh.position.set( 0 , 0 , -1000 );
    scene.add( boxMesh );


    ambientLight = new THREE.AmbientLight( 0xFFCC00 , 0.5 );
    pointlight = new THREE.PointLight( 0xF3FFE2 , 0.5 );
    scene.add( ambientLight );
    scene.add( pointlight );


    camera.lookAt( new THREE.Vector3( 0 , 0 , 0 ) );

    renderer = new THREE.WebGLRenderer( { canvas: document.getElementById( 'canvas3d' ) , antialias: true } );
    renderer.setClearColor( 0x552255 )
    renderer.setPixelRatio( scenePR );
    renderer.setSize( sceneW , sceneH );

    animateScene();
}

window.addEventListener( 'load' , init );


