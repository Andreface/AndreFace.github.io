
const onxrloaded = () => {
    const initXrScene = ({scene, camera}) => 
    {
    // Add a grid of purple spheres to the scene. Objects in the scene at height/ y=0 will appear to
    // stick to physical surfaces.
    for (let i = -5; i <=5 ; i += .5) {
      for (let j = -5; j <= 5; j += .5) {
        if (Math.round(i) != i && Math.round(j) != j) { continue }
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(.03, 8, 8), new THREE.MeshBasicMaterial({color: purple}))
        sphere.position.set(i, 0, j)
        scene.add(sphere)
      }
    }
    camera.position.set(0, 3, 0)
    }
}