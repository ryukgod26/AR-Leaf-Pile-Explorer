AFRAME.registerComponent('tap_to_place',{

	init : function(){
	const sceneEl = this.el;
	const reticle = document.querySelector('#reticle');
	const tree = document.querySelector('#Tree');
	}

	sceneEl.addEventListener('select',()=>{
	if reticle.getAttribute('visible'){
	const pos = reticle.getAttribute('position');
	tree.setAttribute('position',pos);
	tree.setAttribute('visible',true);
	}
	});

});
