loadPage = function() {

	var flair_class = '';

	//SPECIAL FLAIRS
    loadIcons = function() {
        var categories = [
            ['weapons', getWeapons(), 'Weapon/CardS'],
            ['jobs', getJobs(), 'Job/CharacterIcon'],
            ['nightmares', getNightmares(), 'Nightmare/CardS'],
            ['armor', getArmor(), 'Armor/CardS']
        ]
               
        //creates HTML for fokin everything
        for (var categ in categories) {
            var contain = document.getElementById(categ[0]);
            for (var x in categ[1]) {
                var icon = document.createElement('img');
                icon.setAttribute('class', 'flair');
                icon.setAttribute('id', categ[0][0] + categ[1][x]);
                icon.setAttribute('src', 'images/' + categ[2] + ( ('0000' + categ[1][x]).substr(-4) ) + '.png');
 
                contain.appendChild(icon);
            }
        }
    }
	loadIcons();
}

//waits for DOM to load before executing function
document.addEventListener('DOMContentLoaded', loadPage, false);
