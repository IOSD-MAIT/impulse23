const bg = document.querySelector('main .bg img');
const events = document.getElementById('events');
const title = document.querySelector('main .title');
window.onscroll = () => {
	const scroll = document.documentElement.scrollTop;
	bg.style.objectPosition = `${scroll * 0.2}px 74%`;
	events.style.paddingLeft = `${5 - scroll * 0.01}rem`;
	events.style.paddingRight = `${5 - scroll * 0.01}rem`;
	title.style.marginBottom = `${scroll * 0.05}rem`;
};

// const past = document.getElementById("past");
// document.onmousemove = (e) => {
//   // console.log(e.clientX / 10, e.clientY / 10);
//   past.style.backgroundPosition = `${38 + e.clientX / 100}% ${
//     50 + e.clientY / 100
//   }%`;
// };

function particleEffect() {
	// PARTICLE EFFECT
	var element = document.getElementById('particles') || document.body;
	var options = { alpha: true };

	if (element instanceof HTMLCanvasElement) {
		options.canvas = element;
	}

	var renderer = new THREE.WebGLRenderer(options, { antialias: true });

	if (!options.canvas) {
		element.appendChild(renderer.domElement);
		var canvas = renderer.domElement;
	} else {
		canvas = element;
	}

	// Scene
	var scene = new THREE.Scene();

	// Camera
	camera = new THREE.PerspectiveCamera(75, canvas.clientWidth, canvas.clientHeight, 1, 1000);
	camera.position.z = 500;

	// Fog
	scene.fog = new THREE.Fog(0x222125, 0.005, 560, 1000);

	// Variables
	var particles, particle, particleMaterial, particleCount, points, texture;
	var xSpeed, ySpeed;

	// Speed
	xSpeed = 0.0005;
	ySpeed = 0.001;

	// Particles
	particleCount = 10000;
	particles = new THREE.Geometry();

	for (var i = 0; i < particleCount; i++) {
		var px = Math.random() * 2000 - 1000;
		var py = Math.random() * 2000 - 1000;
		var pz = Math.random() * 2000 - 1000;

		particle = new THREE.Vector3(px, py, pz);
		particle.velocity = new THREE.Vector3(0, Math.random(), 0);
		particles.vertices.push(particle);
	}

	/* ------------------------------------ */
	// Texture
	var sprite = new THREE.TextureLoader().load('assets/textures/disc.png');

	// Particles material
	particleMaterial = new THREE.PointsMaterial({
		size: 6.5,
		sizeAttenuation: false,
		map: sprite,
		alphaTest: 0.5,
		transparent: true,
		opacity: 0.8,
		color: 0xf2d79f,
		blending: THREE.AdditiveBlending
	});
	/* //-----------------------------------
var material = new THREE.PointsMaterial({ color: 0xf2d79f }); // Only for Codepen
//-------------------------------------*/

	// Points
	points = new THREE.Points(particles, particleMaterial);
	points.sortParticles = true;
	scene.add(points);

	// lights
	var light1, light2, hemiLight;

	light1 = new THREE.PointLight(0x52ffef, 100, 600);
	light1.position.set(-200, 300, 300);
	light1.castShadow = true;
	light1.shadow.mapSize.width = 2048;
	light1.shadow.mapSize.height = 2048;
	scene.add(light1);

	light2 = new THREE.PointLight(0x53ffd1, 50, 600);
	light2.position.set(250, -300, 300);
	light2.castShadow = true;
	light2.shadow.mapSize.width = 2048;
	light2.shadow.mapSize.height = 2048;
	scene.add(light2);

	hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 5);
	hemiLight.color.setHSL(0.6, 1, 0.6);
	hemiLight.groundColor.setHSL(0.095, 1, 0.75);
	hemiLight.position.set(0, 500, 0);
	scene.add(hemiLight);

	// Resize
	var resize = function() {
		var width = canvas.clientWidth;
		var height = canvas.clientHeight;
		if (canvas.width != width || canvas.height != height) {
			renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}
	};

	// Render
	var render = function() {
		// Call resize
		resize();

		// Animate particles randomly
		var i = particleCount;
		while (i--) {
			var particle = particles.vertices[i];

			// Animate y
			if (particle.y > 1000) {
				particle.y = -1000;
				particle.velocity.y = Math.random();
			}

			particle.velocity.y += Math.random() * ySpeed;
			particle.add(particle.velocity);
		}

		points.geometry.verticesNeedUpdate = true;

		// Points to go upwards
		points.rotation.y += xSpeed;

		// Call scene and camera
		renderer.render(scene, camera);

		// Update animation frame
		requestAnimationFrame(render, canvas);
	};

	// Call render
	render();
}
particleEffect();

document.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(updateTime)
);

function updateTime() {
  const currDate = new Date();
  const eventDate = new Date("2023-04-25");
  const seconds = Math.round(eventDate.getTime() - currDate.getTime()) / 1000;
  const days = Math.round(seconds / (60 * 60 * 24));
  const hours = Math.round((seconds - days * 60 * 60 * 24) / (60 * 60));
  const mins = Math.round(seconds / (60 * 60 * 24 * days * hours));
  const secs = Math.round(seconds / (60 * 60 * 24 * days * hours * mins));

  // console.log(seconds);
  document.documentElement.style.setProperty("--timer-day", "'" + days + "'");
  document.documentElement.style.setProperty("--timer-hours", "'" + mins + "'");
  document.documentElement.style.setProperty(
    "--timer-minutes",
    "'" + mins + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-seconds",
    "'" + secs + "'"
  );
  requestAnimationFrame(updateTime);
}
