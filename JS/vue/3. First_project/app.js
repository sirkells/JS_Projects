new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false
    },
    methods:{
        gameStart: function () {
            this.gameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculateDamage(3, 10);
            if (this.whoWon()) {
                return;
            };

            this.playerHealth -= this.calculateDamage(5, 10);
            this.whoWon();
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },
        calculateDamage: function(min, max) {
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            return damage
        },
        whoWon: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won, Start New Game?')) {
                    this.gameStart();
                } else {
                    this.gameRunning = false;
                }
                return;
            }
            else if (this.playerHealth <= 0) {
                if (confirm('You Lost, Start New Game?')) {
                    this.gameStart();
                } else {
                    this.gameRunning = false;
                }
                return;
            }
        }

    }

});