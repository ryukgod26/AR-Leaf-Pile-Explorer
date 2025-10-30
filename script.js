AFRAME.registerComponent('tap_to_place',{

    init : function(){
    const sceneEl = this.el;
    const reticle = document.querySelector('#reticle');
    const leafPile= document.querySelector("#leafPile");	
    const dinosaur = document.querySelector("#dinosaur");
    const tree = document.querySelector('#Tree');
    

    sceneEl.addEventListener('select',()=>{
    if (reticle.getAttribute('visible')){
    const pos = reticle.getAttribute('position');
    leafPile.setAttribute('position',pos);
    dinosaur.setAttribute('position',pos);
    tree.setAttribute('position',pos);

    tree.setAttribute('visible',true);
    leafPile.setAttribute('visible',true);
    dinosaur.setAttribute('visible',false);
    }
    });
    }

});

AFRAME.registerComponent('reveal_dino',{
    init : function() {
    const leafPile = this.el;
    const dinosaur = document.querySelector("#dinosaur");
    const explosion= document.querySelector("#leaf-explosion");
    const rustleSound = document.querySelector("#rustle");
    const poofSound = document.querySelector("#poof");
        
    function reveal() {

      const pos = leafPile.getAttribute('position');

      if (rustleSound && rustleSound.components && rustleSound.components.sound) {
        rustleSound.components.sound.playSound();
      }

      leafPile.setAttribute('visible', false);
      explosion.setAttribute('position', pos);
      explosion.setAttribute('particle-system', 'enabled:true');

      if (poofSound && poofSound.components && poofSound.components.sound) {
        poofSound.components.sound.playSound();
      }

      setTimeout(() => {
        dinosaur.setAttribute('visible', true);
        explosion.setAttribute('particle-system', 'enabled:false');
      }, 300);
    }

    leafPile.addEventListener('click', reveal);
    leafPile.addEventListener('touchstart', (e) => { e.preventDefault(); reveal(); });
    }
});