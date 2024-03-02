function arenaTier(input) {
  let arena = {};

  while (input[0] !== 'Ave Cesar') {
    let line = input.shift();
    if (line.includes('->')) {
      addGladiator(line);
    } else {
      duel(line);
    }
  }

  const sorted = Object.entries(arena).sort(compareGladiators);

  for (let [name, techniques] of sorted) {
    let skills = Object.values(techniques);
    let totalSkill = 0;

    for (let skill of skills) {
      totalSkill += skill;
    }
    console.log(`${name}: ${totalSkill} skill`);

    let sortedTechniques = Object.entries(techniques).sort(compareTechniques);

    for (let [technique, value] of sortedTechniques) {
      console.log(`- ${technique} <!> ${value}`);
    }
  }

  function compareGladiators(a, b) {
    let skillA = Object.values(a[1]);
    let totalSkillA = 0;

    for (let skill of skillA) {
      totalSkillA += skill;
    }

    let skillB = Object.values(b[1]);
    let totalSkillB = 0;

    for (let skill of skillB) {
      totalSkillB += skill;
    }

    return (totalSkillB - totalSkillA) || a[0].localeCompare(b[0]);
  }


  function compareTechniques(a, b) {
    return (b[1] - a[1]) || a[0].localeCompare(b[0]);
  }

  function addGladiator(line) {
    let [name, technique, skill] = line.split(' -> ');
    skill = Number(skill);

    if (arena[name] === undefined) {
      arena[name] = {}
    }

    let existingSkill = arena[name][technique];
    if (existingSkill === undefined || existingSkill < skill) {
      arena[name][technique] = skill;
    }
  }

  function duel(line) {
    let [a, b] = line.split(' vs ');
    if (arena[a] !== undefined && arena[b] !== undefined) {
      let common = findCommonTech(arena[a], arena[b]);
      if (common !== undefined) {
        let skillA = Object.values(arena[a]);
        let totalSkillA = 0;

        for (let skill of skillA) {
          totalSkillA += skill;
        }

        let skillB = Object.values(arena[b]);
        let totalSkillB = 0;

        for (let skill of skillB) {
          totalSkillB += skill;
        }

        if (totalSkillA > totalSkillB) {
          delete arena[b];
        } else if (totalSkillA < totalSkillB) {
          delete arena[a];
        }
      }
    }
  }

  function findCommonTech(a, b) {
    let techniqueA = Object.keys(a);
    let techniqueB = Object.keys(b);

    for (let technique of techniqueA) {
      if (techniqueB.includes(technique)) {
        return technique;
      }
    }
    return undefined;
  }
}