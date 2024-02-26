function heroes() {
  function decorateFight(state) {
    state.fight = () => {
      state.stamina--;
      console.log(`${state.name} slashes at the foe!`);
    }
  }

  function decorateCast(state) {
    state.cast = (spell) => {
      state.mana--;
      console.log(`${state.name} cast ${spell}`);
    }
  }

  function mage(name) {
    let mageState = {
      name,
      health: 100,
      mana: 100,
    }

    decorateCast(mageState);

    return mageState;
  }

  function fighter(name) {
    let fighterState = {
      name,
      health: 100,
      stamina: 100,
    }

    decorateFight(fighterState);

    return fighterState;
  }

  return { fighter, mage };
}