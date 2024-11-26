const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // 이미지, 스프라이트, 타일셋 등을 로드합니다.
    this.load.image('sky', 'path/to/sky.png');
    this.load.image('platform', 'path/to/platform.png');
    this.load.image('player', 'path/to/player.png');
}

function create() {
    // 배경과 플랫폼, 플레이어 캐릭터 설정
    this.add.image(400, 300, 'sky');

    // 플랫폼 생성 및 물리 설정
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'platform').setScale(2).refreshBody();

    // 플레이어 설정
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);
}

function update() {
    // 입력에 따른 플레이어 이동 로직
    const cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }
}

