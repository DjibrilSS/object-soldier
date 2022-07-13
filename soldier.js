const soldier = {
  name: "Rembo",
  health: 10,
  weapon: {
    name: "AK-47",
    patrons: 30,
  },
  ammunation: 3,

  shot() {
    if (this.weapon.patrons === 0) {
      console.log("Обойма пуста, перезаредитесь");
    } else {
      this.weapon.patrons -= 1;
      console.log("бах-бах");
    }
  },
  reload() {
    if (this.ammunation === 0) {
      console.log("не осталось припасов");
    } else {
      this.ammunation -= 1;
      this.weapon.patrons = 30;
      console.log("Перезарядка...");
    }
  },
  hurt() {
    this.health -= 1;
    if (this.health <= 0) {
      console.log("Ты проиграл");
    }
  },
};
