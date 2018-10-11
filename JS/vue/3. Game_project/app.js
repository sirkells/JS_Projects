new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameRunning: false,
        turns: []
    },
    methods:{
        gameStart: function () {
            this.gameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if (this.whoWon()) {
                return;
            };
            this.monsterDamageOnPlayerHealth();
            
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player Special Attacks Monster for ' + damage
            });
            if (this.whoWon()) {
                return;
            };
            this.monsterDamageOnPlayerHealth();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals for 10' 
                });
                this.monsterDamageOnPlayerHealth();
            }
        },
        giveUp: function () {
            if (confirm('Are you sure you wanna give up?')) {
                this.gameRunning = false;
                this.turns = [];
            }
        },
        calculateDamage: function(min, max) {
            var damage =Math.max(Math.floor(Math.random() * max) + 1, min);
            return damage;
        },
        monsterDamageOnPlayerHealth: function() {
            var damage = this.calculateDamage(5, 10)
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
            this.whoWon();
        },
        whoWon: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won, Start New Game?')) {
                    this.gameStart();
                } else {
                    this.gameRunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if (confirm('You Lost, Start New Game?')) {
                    this.gameStart();
                } else {
                    this.gameRunning = false;
                }
                return true;
            }
            return false;
        }

    }

});