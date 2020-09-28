/*assets*/
var gameState = {};

const createQ = (question, ans1, cor1, ans2, cor2, ans3, cor3, ans4, cor4) => {
  const Q = {};
  (Q.question = question),
    (Q.answers = {
      answer1: {
        ans1,
        cor1,
      },
      answer2: {
        ans2,
        cor2,
      },
      answer3: {
        ans3,
        cor3,
      },
      answer4: {
        ans4,
        cor4,
      },
    });
  return Q;
};

gameState.signal;

gameState.question = [
  createQ(
    "หากวัตถุเคลื่อนที่ด้วยความเร่งคงที่?...",
    "∑F = 0",
    true,
    "∑F = ma",
    false,
    "F - f = ma",
    false,
    "ไม่มีข้อใดถูก",
    false
  ),
  createQ(
    "การเคลื่อนที่แบบโพรเจคไทล์...",
    "Vแนวราบไม่คงที่",
    false,
    "ไม่มีความเร่งในแนวดิ่ง",
    false,
    "Vในแนวดิ่งไม่มีทางเท่ากับ0",
    false,
    "แนวดิ่งเคลื่อนที่ด้วยความเร่งคงที่",
    true
  ),
  createQ(
    "การเคลื่อนที่โพรเจกไทล์ วัตตุจะไปไกลสุดเมื่อ?",
    "ทำมุม 90° กับแนวราบ",
    false,
    "ทำมุม 45° กับแนวราบ",
    true,
    "ทำมุม 120° กับแนวราบ",
    false,
    "ไม่มีข้อใดถูก",
    false
  ),
  createQ(
    "v=u + at ใช้ได้เมื่อ?",
    "เคลื่อนที่สามมิติ",
    true,
    "เคลื่อนที่แนวตรงด้วยความเร่งไม่คงที่",
    false,
    "เคลื่อนที่ในแนวดิ่ง",
    true,
    "ไม่มีข้อใดถูก",
    false
  ),
  createQ(
    "ความถี่(f)คือ",
    "จำนวนรอบ/วินาที",
    true,
    "วินาที/จำนวนรอบ",
    false,
    "จำนวนรอบ/นาที",
    false,
    "นาที/จำนวนรอบ",
    false
  ),
  createQ("work=?", "P/t", false, "Fvt", true, "F/S", false, "t/P", false),
  createQ(
    "วัตถุตกลงมาจากความสูง h m ที่จุดสูงสุดก่อนตก วัตถุมี",
    "พลังงานจลน์สูงสุด",
    false,
    "พลังงานจลน์และศักย์เท่ากัน",
    false,
    "พลังงานจลน์มากกว่าศักย์เล็กน้อย",
    false,
    "พลังงานศักย์สูงสุด",
    true
  ),
  createQ(
    "คลื่นเคลื่อนที่ด้วย",
    "ความเร่ง",
    false,
    "ทิศทางเดียวเท่านั้น",
    false,
    "ความเร็วคงที",
    true,
    "ไม่มีข้อถูก",
    false
  ),
  createQ(
    "คลื่นเคลื่อนที่จากน้ำลึกไปน้ำตื้น?",
    "มุมที่ทำกับเส้นกลางมากขึ้น",
    true,
    "มุมที่ทำกับเส้นกลางน้อยลง",
    false,
    "มุมไม่เปลี่ยนแปลง",
    false,
    "ไม่สามารถบอกได้",
    false
  ),
  createQ(
    "กระจกเงาราบให้ภาพ?",
    "เสมือน ขนาดใหญ่ขึ้น",
    false,
    "เสมือน ขนาดเท่าเดิม",
    true,
    "จริง ขนาดใหญ่ขึ้น",
    false,
    "จริง ขนาดเท่าเดิม",
    false
  ),
  createQ(
    "การเคลื่อนที่ซิมเปิลฮาร์มอนิก พลังงานจลน์สูงสุดเมื่อ?",
    "แกว่งสูงสุด",
    false,
    "ทำมุม45°กับแนวกลาง",
    false,
    "จุดต่่ำสุด",
    true,
    "ขึ้นอยู่กับความเร็ววัตถุ",
    false
  ),
  createQ(
    "การชนแบบยืดหยุ่น?",
    "Ekไม่เปลี่ยนแปลง",
    true,
    "Ekเพิ่มขึ้น",
    false,
    "Ekลดลง",
    false,
    "ไม่แน่นอน อาจเพิ่มหรือลดก็ได้",
    false
  ),
  createQ(
    "นาโนคือ 10 ยกกำลัง?",
    "-15",
    false,
    "6",
    false,
    "-12",
    false,
    "-9",
    true
  ),
  createQ(
    "เมกะคือ 10 ยกกำลัง?",
    "-15",
    false,
    "6",
    true,
    "-12",
    false,
    "9",
    false
  ),
  createQ(
    "เส้นกราฟ s-t คงที่ แปลว่า",
    "วัตถุเคลื่อนที่ด้วย v คงที่",
    false,
    "วัตถุเคลื่อนที่ด้วย a คงที่",
    false,
    "วัตถุอยู่นิ่ง",
    true,
    "a และ v ไม่คงที่",
    false
  ),
  createQ(
    "ความชันกราฟ a-t มีค่าเท่ากับ?",
    "ไม่มีค่า",
    true,
    "v",
    false,
    "s",
    false,
    "a",
    false
  ),
  createQ(
    "กฎอนุรักษ์พลังงานความร้อน",
    "ΔQ=ΔUΔW",
    false,
    "ΔQ-ΔU=ΔW",
    true,
    "ΔQ+ΔU=ΔW",
    false,
    "ไม่มีข้อใดถูก",
    false
  ),
  createQ(
    "การต่อ R แบบขนาน จะมี__เท่ากันทั้งวงจร",
    "V เท่า",
    true,
    "I เท่า",
    false,
    "ไม่มีอะไรเท่า",
    false,
    "เท่าทั้ง V และ I"
  ),
  createQ(
    "กฎของโอห์ม",
    "ค็อกเทล",
    false,
    "V=I/R",
    false,
    "V=IR",
    true,
    "V=I^2R",
    false
  ),
  createQ(
    "สมการสมพัทธภาพ",
    "E=mc",
    false,
    "E=mc^2",
    true,
    "E=m/c",
    false,
    "E=m^2c",
    false
  ),
];



class Main extends Phaser.Scene {
  constructor() {
    super("Main");
  }

  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.image("gem", "./assets/gem.png");
    this.load.audio("bgm", "./assets/music.mp3");
    this.load.image("eh", "./assets/eh.png");
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0).setScale(0.45);
    gameState.gem = this.physics.add
      .sprite(240, 380, "gem")
      .setScale(0.45)
      .setVelocityY(-30);
    gameState.text = this.add.text(
      120,
      620,
      "Click HERE \n To Start the Adventure",
      { font: "25px kanit", color: "white", align: "center" }
    );
    gameState.eh = this.add.sprite(450, 770, "eh").setScale(0.05);

    gameState.music = this.sound.add("bgm");
    gameState.music.loop = true;
    gameState.music.play();

    gameState.text.setInteractive();
    gameState.text.on(
      "pointerup",
      function () {
        this.scene.start("Categories");
      },
      this
    );

    gameState.eh.setInteractive();
    gameState.eh.on(
      "pointerup",
      function () {
        this.scene.start("Info");
        document.getElementById("info").style.display = "flex";
      },
      this
    );
  }

  update() {
    if (gameState.gem.y <= 350) {
      gameState.gem.setVelocityY(50);
    } else if (gameState.gem.y >= 380) {
      gameState.gem.setVelocityY(-30);
    }
  }
}


class Categories extends Phaser.Scene {
  constructor() {
    super("Categories");
  }

  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.image("boss", "./assets/bossfightplate.png");
    this.load.image("time", "./assets/timeattackplate.png");
    this.load.image("arrow", "./assets/arrow.png");
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0).setScale(0.45);

    gameState.backbtn = this.add
      .sprite(0, 720, "arrow")
      .setOrigin(0)
      .setScale(0.2);
    gameState.backbtn.setInteractive();
    gameState.backbtn.on(
      "pointerup",
      function () {
        this.scene.start("Main");
        gameState.music.stop();
      },
      this
    );

    gameState.bossbtn = this.add.sprite(245, 270, "boss").setScale(0.3);
    gameState.bossbtn.setInteractive();
    gameState.bossbtn.on(
      "pointerup",
      function () {
        this.scene.start("BossFight");
      },
      this
    );

    gameState.timebtn = this.add.sprite(245, 520, "time").setScale(0.3);
    gameState.timebtn.setInteractive();
    gameState.timebtn.on(
      "pointerup",
      function () {
        this.scene.start("TimeAttack");
      },
      this
    );
  }
}


class Info extends Phaser.Scene {
  constructor() {
    super("Info");
  }

  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.image("arrow", "./assets/arrow.png");
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0).setScale(0.45);

    gameState.backbtn = this.add
      .sprite(0, 720, "arrow")
      .setOrigin(0)
      .setScale(0.2);
    gameState.backbtn.setInteractive();
    gameState.backbtn.on(
      "pointerup",
      function () {
        this.scene.start("Main");
        document.getElementById("info").style.display = "none";
        gameState.music.stop();
      },
      this
    );
  }
}


class BossFight extends Phaser.Scene {
  constructor() {
    super("BossFight");
  }

  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.spritesheet("devil", "./assets/devilsprite.png", {
      frameWidth: 800,
      frameHeight: 698,
    });
    this.load.spritesheet("main", "./assets/mainsprite.png", {
      frameWidth: 723,
      frameHeight: 622,
    });
    this.load.image("pause", "./assets/pause.png");

    this.load.audio("evil", "./assets/evillaugh.mp3");

  }

  create() {
    //animation
    document.getElementById("play").style.display = "flex";

    //devil
    this.add.image(0, 0, "bg").setOrigin(0).setScale(0.45);

    gameState.devil = this.add.sprite(240, 230, "devil").setScale(0.6);

    this.anims.create({
      key: "devilanim",
      frames: this.anims.generateFrameNumbers("devil"),
      frameRate: 6,
      repeat: -1,
    });

    gameState.devil.play("devilanim");
    gameState.evil = this.sound.add("evil");
    
    //main
    gameState.main = this.add.sprite(140, 715, "main").setScale(0.24);

    document.getElementById('timenum').innerText = ''

    this.time.addEvent({
      delay: Phaser.Math.Between(5000, 10000),
      callback: () => {
        gameState.evil.play();
      },
      loop: true,
    });

    if (!gameState.music.isPlaying) {
      gameState.music.play();
    }

    //pause

    gameState.pause = this.add
      .sprite(20, 20, "pause")
      .setOrigin(0)
      .setScale(0.9);
    gameState.pause.setInteractive();

    gameState.pause.on("pointerup", () => {
      document.getElementById("pauseModal").style.display = "flex";
      this.scene.pause();
    });

    document.getElementById("continue").onclick = () => {
      document.getElementById("pauseModal").style.display = "none";
      this.scene.resume();
    };

    document.getElementById("restart").onclick = () => {
      document.getElementById("pauseModal").style.display = "none";
      this.scene.restart();
      gameState.music.stop();
    };

    document.getElementById("leave").onclick = () => {
      document.getElementById("pauseModal").style.display = "none";
      document.getElementById("play").style.display = "none";
      this.scene.stop();
      this.scene.start("Main");
      gameState.music.stop();
    };

    //gameplay
    let i = 0;
    gameState.lives = 3;

    gameState.askQuestion = () => {
      document.getElementById("questionText").innerText =
        gameState.question[i].question;
      document.getElementById("ans1").innerText =
        gameState.question[i].answers.answer1.ans1;
      document.getElementById("ans2").innerText =
        gameState.question[i].answers.answer2.ans2;
      document.getElementById("ans3").innerText =
        gameState.question[i].answers.answer3.ans3;
      document.getElementById("ans4").innerText =
        gameState.question[i].answers.answer4.ans4;



      document.getElementById("qnum-text").innerText = "คำถามที่ " + (i + 1);
    };

    gameState.loseHealth = () => {
      gameState.lives--;
      document
        .getElementById("hearts")
        .removeChild(document.getElementById("heart"));
      gameState.evil.play();
      gameState.main.setFrame(2);
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          gameState.main.setFrame(1);
        },
        loop: false,
      });
    };

    gameState.playerWin = () => {
        this.scene.stop();
        gameState.music.stop();
        this.scene.start("Winner");
        gameState.signal = 'boss'
        document.getElementById("play").style.display = "none";
    }

    gameState.askQuestion();
    gameState.main.setFrame(1);
    document.getElementById("hearts").innerHTML = "";

    if (gameState.lives == 3) {
      for (let n = 0; n < 3; n++) {
        let heart = document.createElement("img");
        heart.src = "./assets/heart.png";
        heart.id = "heart";
        document.getElementById("hearts").appendChild(heart);
      }
    }

    gameState.answerOne = () => {
      if (gameState.question[i].answers.answer1.cor1) {
          i++;
          gameState.askQuestion();
      } else {
        gameState.loseHealth();
      }
    };

    gameState.answerTwo = () => {
      if (gameState.question[i].answers.answer2.cor2) {
        if (i < 19) {
          i++;
          gameState.askQuestion();
        } else if (i == 19) {
          gameState.playerWin();
        }
      } else {
        gameState.loseHealth();
      }
    };

    gameState.answerThree = () => {
      if (gameState.question[i].answers.answer3.cor3) {
        i++;
        gameState.askQuestion();
      } else {
        gameState.loseHealth();
      }
    };

    gameState.answerFour = () => {
      if (gameState.question[i].answers.answer4.cor4) {
        i++;
        gameState.askQuestion();
      } else {
        gameState.loseHealth();
      }
    };
  }

  update() {
    if (gameState.lives == 0) {
      this.scene.stop();
      gameState.music.stop();
      this.scene.start("Loser");
      document.getElementById("play").style.display = "none";
      gameState.signal = 'boss'
    }
  }
}

class TimeAttack extends Phaser.Scene {
  constructor() {
    super("TimeAttack");
  }

  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.spritesheet("devil", "./assets/devilsprite.png", {
      frameWidth: 800,
      frameHeight: 698,
    });
    this.load.spritesheet("main", "./assets/mainsprite.png", {
      frameWidth: 723,
      frameHeight: 622,
    });
    this.load.image("pause", "./assets/pause.png");

    this.load.audio("evil", "./assets/evillaugh.mp3");
  }

  create() {
    //animation
    document.getElementById("play").style.display = "flex";

    //devil
    this.add.image(0, 0, "bg").setOrigin(0).setScale(0.45);

    gameState.devil = this.add.sprite(240, 230, "devil").setScale(0.6);

    this.anims.create({
      key: "devilanim",
      frames: this.anims.generateFrameNumbers("devil"),
      frameRate: 6,
      repeat: -1,
    });

    gameState.devil.play("devilanim");
    gameState.evil = this.sound.add("evil");
    //main
    gameState.main = this.add.sprite(140, 715, "main").setScale(0.24);

    //gameState.main.setFrame(1)

    this.time.addEvent({
      delay: Phaser.Math.Between(5000, 10000),
      callback: () => {
        gameState.evil.play();
      },
      loop: true,
    });

    if (!gameState.music.isPlaying) {
      gameState.music.play();
    }
    //pause

    gameState.pause = this.add
      .sprite(20, 20, "pause")
      .setOrigin(0)
      .setScale(0.9);
    gameState.pause.setInteractive();

    gameState.pause.on("pointerup", () => {
      document.getElementById("pauseModal").style.display = "flex";
      this.scene.pause();
    });

    document.getElementById("continue").onclick = () => {
      document.getElementById("pauseModal").style.display = "none";
      this.scene.resume();
    };

    document.getElementById("restart").onclick = () => {
      document.getElementById("pauseModal").style.display = "none";
      this.scene.restart();
      gameState.music.stop();
    };

    document.getElementById("leave").onclick = () => {
      document.getElementById("pauseModal").style.display = "none";
      document.getElementById("play").style.display = "none";
      this.scene.stop();
      this.scene.start("Main");
      gameState.music.stop();
    };

    //gameplay
    gameState.score = 0;
    gameState.lives = 3;
    gameState.copyQ = [...gameState.question];

    gameState.askQuestion = () => {
      gameState.ran = Math.floor(Math.random() * gameState.copyQ.length);

      document.getElementById("questionText").innerText =
        gameState.copyQ[gameState.ran].question;
      document.getElementById("ans1").innerText =
        gameState.copyQ[gameState.ran].answers.answer1.ans1;
      document.getElementById("ans2").innerText =
        gameState.copyQ[gameState.ran].answers.answer2.ans2;
      document.getElementById("ans3").innerText =
        gameState.copyQ[gameState.ran].answers.answer3.ans3;
      document.getElementById("ans4").innerText =
        gameState.copyQ[gameState.ran].answers.answer4.ans4;

      document.getElementById("qnum-text").innerText =
        "คะแนน: " + gameState.score;
    };

    gameState.loseHealth = () => {
      gameState.lives--;
      document
        .getElementById("hearts")
        .removeChild(document.getElementById("heart"));
      gameState.evil.play();
      gameState.main.setFrame(2);
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          gameState.main.setFrame(1);
        },
        loop: false,
      });
    };

    gameState.askQuestion();
    gameState.main.setFrame(1);
    document.getElementById("hearts").innerHTML = "";

    if (gameState.lives == 3) {
      for (let n = 0; n < 3; n++) {
        let heart = document.createElement("img");
        heart.src = "./assets/heart.png";
        heart.id = "heart";
        document.getElementById("hearts").appendChild(heart);
      }
    }

    gameState.answerOne = () => {
      if (gameState.copyQ[gameState.ran].answers.answer1.cor1) {
            gameState.score++;
            gameState.copyQ.splice(gameState.ran, 1);
            gameState.askQuestion();
        if (gameState.copyQ.length == 1) {
          gameState.copyQ = [...gameState.question];
        }
      } else {
        gameState.loseHealth();
      }
    };

    gameState.answerTwo = () => {
      if (gameState.copyQ[gameState.ran].answers.answer2.cor2) {
        gameState.score++;
        gameState.copyQ.splice(gameState.ran, 1);
        gameState.askQuestion();
        if (gameState.copyQ.length == 1) {
          gameState.copyQ = [...gameState.question];
        }
      } else {
        gameState.loseHealth();
      }
    };

    gameState.answerThree = () => {
      if (gameState.copyQ[gameState.ran].answers.answer3.cor3) {
        gameState.score++;
        gameState.copyQ.splice(gameState.ran, 1);
        gameState.askQuestion();
        if (gameState.copyQ.length == 1) {
          gameState.copyQ = [...gameState.question];
        }
      } else {
        gameState.loseHealth();
      }
    };

    gameState.answerFour = () => {
      if (gameState.copyQ[gameState.ran].answers.answer4.cor4) {
        gameState.score++;
        gameState.copyQ.splice(gameState.ran, 1);
        gameState.askQuestion();
        if (gameState.copyQ.length == 1) {
          gameState.copyQ = [...gameState.question];
        }
      } else {
        gameState.loseHealth();
      }
    };

    gameState.time = 60;
    this.time.addEvent({
      delay: 1000,
      callback: () => {
        gameState.time--;
      },
      loop: true,
    });
  }

  update() {
    if (gameState.lives == 0) {
      this.scene.stop();
      gameState.music.stop();
      this.scene.start("Loser");
      document.getElementById("play").style.display = "none";
      gameState.signal = 'time'
    }
    document.getElementById("timenum").innerText = gameState.time;
    if (gameState.time < 0) {
      this.scene.stop();
      gameState.music.stop();
      this.scene.start("Winner");
      document.getElementById("play").style.display = "none";
      gameState.signal = 'time'
    }
  }
}

class Winner extends Phaser.Scene {
  constructor() {
    super("Winner");
  }

  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.image('win','./assets/endWin.png')
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0).setScale(0.45);
    this.add.image(240,420,'win')

    document.getElementById('end-buttons').style.paddingLeft = '120px'

    gameState.music.play();
    document.getElementById('ending').style.display = 'flex'

    if (gameState.signal === 'boss') {
      document.getElementById('endh').innerText = 'คุณชนะปีศาจได้แล้ว!'
      document.getElementById('endp').innerHTML = 'คุณเก่งมากเลย ช่วยเมืองไว้ได้แล้วนะ'
    } else if (gameState.signal === 'time') {
      document.getElementById('endh').innerText = 'คุณได้คะแนน ' + gameState.score
      document.getElementById('endp').innerHTML = 'อย่าลืมเอาคะแนนไปอวดเพื่อนๆนะ :)'
    }

    document.getElementById('res').onclick = () => {
      this.scene.stop()
      gameState.music.stop();
      if (gameState.signal === "boss") {
        this.scene.start('BossFight')
        document.getElementById('end-buttons').style.paddingLeft = '0px'
        gameState.signal = ''
        document.getElementById('ending').style.display = 'none'
      } else if (gameState.signal === 'time') {
        this.scene.start('TimeAttack')
        gameState.signal = ''
        document.getElementById('ending').style.display = 'none'
        document.getElementById('end-buttons').style.paddingLeft = '0px'
      }
    }

    document.getElementById('main').onclick = () => {
      this.scene.stop();
      gameState.music.stop();
      this.scene.start('Main');
      document.getElementById('ending').style.display = 'none'
      document.getElementById('end-buttons').style.paddingLeft = '0px'
    }
  }
}

class Loser extends Phaser.Scene {
  constructor() {
    super("Loser");
  }

  preload() {
    this.load.image("bg", "./assets/bg.png");
    this.load.image('lose',"./assets/endLose.png")
  }

  create() {
    this.add.image(0, 0, "bg").setOrigin(0).setScale(0.45);
    this.add.image(240,500,'lose')
    gameState.music.play();
    document.getElementById('ending').style.display = 'flex'

    if (gameState.signal === 'boss') {
      document.getElementById('endh').innerText = 'คุณแพ้ปีศาจซะแล้ว :('
      document.getElementById('endp').innerHTML = 'ครั้งหน้ามาลองใหม่อีกครั้งนะ!'
    } else if (gameState.signal === 'time') {
      document.getElementById('endh').innerText = 'คุณได้คะแนน ' + gameState.score
      document.getElementById('endp').innerHTML = 'อย่าลืมเอาคะแนนไปอวดเพื่อนๆนะ :)'
    }

    document.getElementById('res').onclick = () => {
      this.scene.stop()
      gameState.music.stop();
      if (gameState.signal === "boss") {
        this.scene.start('BossFight')
        gameState.signal = ''
        document.getElementById('ending').style.display = 'none'
      } else if (gameState.signal === 'time') {
        this.scene.start('TimeAttack')
        gameState.signal = ''
        document.getElementById('ending').style.display = 'none'
      }
    }

    document.getElementById('main').onclick = () => {
      this.scene.stop();
      gameState.music.stop();
      this.scene.start('Main');
      document.getElementById('ending').style.display = 'none'
    }
  }
}

const config = {
  backgroundColor: 0x00000,
  type: Phaser.CANVAS,
  scene: [Main, Categories, Info, BossFight, TimeAttack,Winner, Loser],
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 480,
    height: 800,
  },
  physics: {
    default: "arcade",
    arcade: {},
  },
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
