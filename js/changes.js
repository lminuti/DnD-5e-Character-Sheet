var LOCKED = false;

function lock(argument) {
    LOCKED = !LOCKED;
    if (LOCKED)
        $('#menu-options #lock').text('Locked');
    else
        $('#menu-options #lock').text('Unlocked');

    $('#menu-options #lock').toggleClass('locked');
    $('#menu-options #lock').toggleClass('unlocked');
}



function updateMod(att, score) {
    var value = '';
    switch (parseInt(score)) {
        case 1:
            value = '-5';
            break;
        case 2:
        case 3:
            value = '-4';
            break;
        case 4:
        case 5:
            value = '-3';
            break;
        case 6:
        case 7:
            value = '-2';
            break;
        case 8:
        case 9:
            value = '-1';
            break;
        case 10:
        case 11:
            value = '+0';
            break;
        case 12:
        case 13:
            value = '+1';
            break;
        case 14:
        case 15:
            value = '+2';
            break;
        case 16:
        case 17:
            value = '+3';
            break;
        case 18:
        case 19:
            value = '+4';
            break;
        case 20:
        case 21:
            value = '+5';
            break;
        case 22:
        case 23:
            value = '+6';
            break;
        case 24:
        case 25:
            value = '+7';
            break;
        case 26:
        case 27:
            value = '+8';
            break;
        case 28:
        case 29:
            value = '+9';
            break;
        case 30:
            value = '+10';
            break;
    }

    $('#attributes input[name="' + att + '-mod"]').val(value);
}

function updateSaves() {

    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;

    if ($('#saves #str-save input[name="prof"]').prop("checked") == true) {
        var strProf = prof;
    } else {
        var strProf = 0;
    }
    var base = parseInt($('#attributes input[name="str-mod"]').val()) || 0;
    var save = ((base + strProf) < 0 ? "" : "+") + (base + strProf);
    $('#saves input[name="str-save"]').val(save);

    if ($('#saves #dex-save input[name="prof"]').prop("checked") == true) {
        var dexProf = prof;
    } else {
        var dexProf = 0;
    }
    var base = parseInt($('#attributes input[name="dex-mod"]').val()) || 0;
    var save = ((base + dexProf) < 0 ? "" : "+") + (base + dexProf);
    $('#saves input[name="dex-save"]').val(save);

    if ($('#saves #con-save input[name="prof"]').prop("checked") == true) {
        var conProf = prof;
    } else {
        var conProf = 0;
    }
    var base = parseInt($('#attributes input[name="con-mod"]').val()) || 0;
    var save = ((base + conProf) < 0 ? "" : "+") + (base + conProf);
    $('#saves input[name="con-save"]').val(save);

    if ($('#saves #int-save input[name="prof"]').prop("checked") == true) {
        var intProf = prof;
    } else {
        var intProf = 0;
    }
    var base = parseInt($('#attributes input[name="int-mod"]').val()) || 0;
    var save = ((base + intProf) < 0 ? "" : "+") + (base + intProf);
    $('#saves input[name="int-save"]').val(save);

    if ($('#saves #wis-save input[name="prof"]').prop("checked") == true) {
        var wisProf = prof;
    } else {
        var wisProf = 0;
    }
    var base = parseInt($('#attributes input[name="wis-mod"]').val()) || 0;
    var save = ((base + wisProf) < 0 ? "" : "+") + (base + wisProf);
    $('#saves input[name="wis-save"]').val(save);

    if ($('#saves #cha-save input[name="prof"]').prop("checked") == true) {
        var chaProf = prof;
    } else {
        var chaProf = 0;
    }
    var base = parseInt($('#attributes input[name="cha-mod"]').val()) || 0;
    var save = ((base + chaProf) < 0 ? "" : "+") + (base + chaProf);
    $('#saves input[name="cha-save"]').val(save);
}

function updateSpells() {
    var att = $('#saves-skills select[name="spell-att"]').val();

    if (att == 'none') {
        $('#top-bar input[name="spell-dc"]').val('Na');
        $('#spell-info input[name="dc"]').val('Na');
        return;
    }

    var base = parseInt($('#attributes input[name="' + att + '-mod"]').val()) || 0;
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;

    //Update DC
    var dc = 8 + base + prof;
    $('#top-bar input[name="spell-dc"]').val(dc);
    $('#spell-info input[name="dc"]').val(dc);

    //Update Spell Bonus
    var bonus = base + prof;
    $('#spell-info input[name="bonus"]').val("+" + bonus);

    //Update Spell Attribute
    $('#spell-info input[name="att"]').val(att);
}

function updateSkill(base, prof, skillName) {

    var skillProf = 0;

    if ($('#skills #' + skillName + '-skill input[name="expr"]').prop("checked") == true) {
        skillProf = prof * 2;
    } else if ($('#skills #' + skillName + '-skill input[name="prof"]').prop("checked") == true) {
        skillProf = prof;
    } else if ($('#skills #' + skillName + '-skill input[name="base"]').prop("checked") == true) {
        skillProf = Math.trunc(prof / 2);
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);
    $('#skills #' + skillName + '-skill input[type="text"]').val(skill);
}


function updateStrSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="str-mod"]').val()) || 0;
    updateSkill(base, prof, "athletics");
    updateSkill(base, prof, "str-save");
}

function updateDexSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="dex-mod"]').val()) || 0;
    updateSkill(base, prof, "acrobatics");
    updateSkill(base, prof, "sleight-hand");
    updateSkill(base, prof, "stealth");
    updateSkill(base, prof, "dex-save");
}

function updateConSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="con-mod"]').val()) || 0;
    updateSkill(base, prof, "con-save");
}

function updateIntSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="int-mod"]').val()) || 0;

    updateSkill(base, prof, "arcana");
    updateSkill(base, prof, "history");
    updateSkill(base, prof, "investigation");
    updateSkill(base, prof, "religion");
    updateSkill(base, prof, "int-save");
}

function updateWisSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="wis-mod"]').val()) || 0;

    updateSkill(base, prof, "animal-handling");
    updateSkill(base, prof, "insight");
    updateSkill(base, prof, "medicine");
    updateSkill(base, prof, "nature");
    updateSkill(base, prof, "perception");
    updateSkill(base, prof, "survival");
    updateSkill(base, prof, "wis-save");
}

function updateChaSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="cha-mod"]').val()) || 0;

    updateSkill(base, prof, "deception");
    updateSkill(base, prof, "intimidation");
    updateSkill(base, prof, "performance");
    updateSkill(base, prof, "persuasion");
    updateSkill(base, prof, "cha-save");
}

function updateHonSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="hon-mod"]').val()) || 0;

    updateSkill(base, prof, "hon-save");
}

function updateSanSkills() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="san-mod"]').val()) || 0;

    updateSkill(base, prof, "san-save");
}


function updateStrMisc() {
    var base = parseInt($('#attributes input[name="str-mod"]').val()) || 0;
    var score = parseInt($('#attributes input[name="str"]').val()) || 0;

    $('#encumberance input[name="base-encumberance"]').val(score * 5);
    $('#encumberance input[name="encumbered-encumberance"]').val(score * 10);
    $('#encumberance input[name="h-encumbered-encumberance"]').val(score * 15);
    $('#encumberance input[name="push-encumberance"]').val(score * 30);

}

function updateDexMisc() {
    var base = parseInt($('#attributes input[name="dex-mod"]').val()) || 0;
    var score = parseInt($('#attributes input[name="dex"]').val()) || 0;

}

function updateWisMisc() {
    var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
    var base = parseInt($('#attributes input[name="wis-mod"]').val()) || 0;
    var score = parseInt($('#attributes input[name="wis"]').val()) || 0;

    if ($('#skills #perception-skill input[name="prof"]').prop("checked") == true) {
        var skillProf = prof;
    } else {
        var skillProf = 0;
    }

    if ($('#skills #perception-skill input[name="expr"]').prop("checked") == true) {
        var skillProf = prof * 2;
    }

    var skill = ((base + skillProf) < 0 ? "" : "+") + (base + skillProf);

    $('#top-bar input[name="passive-perception"]').val(10 + parseInt(skill));
}

function calculateTotalWeight(argument) {
    var total = 0;
    $('#equipment input[name="weight"]').each(function(argument) {
        total += parseFloat($(this).val()) || 0;
    });

    $('#equipment input[name="total-weight"]').val(total.toFixed(2));
}

function calculateTotalCurrency(argument) {
    var total = 0;
    var base = $('#equipment #currancy select[name="base"]').val();

    $('#equipment #currancy input:not([name="total"])').each(function(argument) {
        switch ($(this).attr("name")) {
            case 'copper':
                var copper = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('copper', base);
                total += copper * modifier;
                break;
            case 'silver':
                var silver = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('silver', base);
                total += silver * modifier;
                break;
            case 'gold':
                var gold = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('gold', base);
                total += gold * modifier;
                break;
            case 'electrum':
                var electrum = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('electrum', base);
                total += electrum * modifier;
                break;
            case 'platinum':
                var platinum = parseInt($(this).val()) || 0;
                var modifier = cacluateCurrencyMod('platinum', base);
                total += platinum * modifier;
                break;
        }
    });

    total = total.toFixed(2);

    $('#equipment #currancy input[name="total"]').val(total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
}

function cacluateCurrencyMod(coin, base) {
    switch (coin) {
        case 'copper':
            switch (base) {
                case 'c':
                    return 1;
                    break;
                case 's':
                    return 1 / 10;
                    break;
                case 'g':
                    return 1 / 100;
                    break;
                case 'e':
                    return 1 / 50;
                    break;
                case 'p':
                    return 1 / 1000;
                    break;
            }
            break;
        case 'silver':
            switch (base) {
                case 'c':
                    return 10;
                    break;
                case 's':
                    return 1;
                    break;
                case 'g':
                    return 1 / 10;
                    break;
                case 'e':
                    return 1 / 5;
                    break;
                case 'p':
                    return 1 / 100;
                    break;
            }
            break;
        case 'gold':
            switch (base) {
                case 'c':
                    return 100
                    break;
                case 's':
                    return 10;
                    break;
                case 'g':
                    return 1;
                    break;
                case 'e':
                    return 2;
                    break;
                case 'p':
                    return 1 / 10;
                    break;
            }
            break;
        case 'electrum':
            switch (base) {
                case 'c':
                    return 50;
                    break;
                case 's':
                    return 5;
                    break;
                case 'g':
                    return 1 / 2;
                    break;
                case 'e':
                    return 1;
                    break;
                case 'p':
                    return 1 / 20;
                    break;
            }
            break;
        case 'platinum':
            switch (base) {
                case 'c':
                    return 1000;
                    break;
                case 's':
                    return 100;
                    break;
                case 'g':
                    return 10;
                    break;
                case 'e':
                    return 20;
                    break;
                case 'p':
                    return 1;
                    break;
            }
            break;
    }
}

function updateSpellSlots(total) {
    var totalSlots = parseInt(total.val()) || 0;
    var number = total.attr('name').substring(-1);
    var slots = total.parent().parent().find('div#slots');
    slots.empty();

    for (var i = totalSlots - 1; i >= 0; i--) {
        slots.append('<input type="checkbox" name="slot-' + number + '">')
    }
}

$('document').ready(function(argument) {
    //Run when strength changes
    $('#attributes input[name="str"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('str', $('#attributes input[name="str"]').val());
        updateStrSkills();
        updateStrMisc();
    });

    //Run when dexterity changes
    $('#attributes input[name="dex"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('dex', $('#attributes input[name="dex"]').val());
        updateDexSkills();
        updateDexMisc();
    });

    //Run when constitution changes
    $('#attributes input[name="con"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('con', $('#attributes input[name="con"]').val());
        updateConSkills();
    });

    //Run when intelligence changes
    $('#attributes input[name="int"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('int', $('#attributes input[name="int"]').val());
        updateIntSkills();
    });

    //Run when wisdom changes
    $('#attributes input[name="wis"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('wis', $('#attributes input[name="wis"]').val());
        updateWisSkills();
        updateWisMisc();
    });

    //Run when charisma changes
    $('#attributes input[name="cha"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('cha', $('#attributes input[name="cha"]').val());
        updateChaSkills();
    });

    //Run when honor changes
    $('#attributes input[name="hon"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('hon', $('#attributes input[name="hon"]').val());
        updateHonSkills();
    });

    //Run when sanity changes
    $('#attributes input[name="san"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateMod('san', $('#attributes input[name="san"]').val());
        updateSanSkills();
    });

    //Run misc att changes
    $('#attributes input').on('input', function(argument) {
        if (LOCKED)
            return;

        updateSaves();
        updateSpells();
    });

    //Run when proficience changes
    $('#top-bar input[name="proficiency"]').on('input', function(argument) {
        if (LOCKED)
            return;

        updateStrSkills();
        updateStrMisc();
        updateDexSkills();
        updateDexMisc();
        updateConSkills();
        updateIntSkills();
        updateWisSkills();
        updateWisMisc();
        updateChaSkills();
        updateHonSkills();
        updateSanSkills();
        updateSaves();
        updateSpells();
    });

    //Run save prof changes
    $('#saves input[name="prof"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateSaves();
        });
    });

    //Run skill base/prof/exp changes
    $('#skills input[name="base"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateStrSkills();
            updateStrMisc();
            updateDexSkills();
            updateDexMisc();
            updateConSkills();
            updateIntSkills();
            updateWisSkills();
            updateWisMisc();
            updateChaSkills();
            updateHonSkills();
            updateSanSkills();
        });
    });

    $('#skills input[name="prof"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateStrSkills();
            updateStrMisc();
            updateDexSkills();
            updateDexMisc();
            updateConSkills();
            updateIntSkills();
            updateWisSkills();
            updateWisMisc();
            updateChaSkills();
            updateHonSkills();
            updateSanSkills();
        });
    });

    $('#skills input[name="expr"]').each(function(index) {
        $(this).change(function(argument) {
            if (LOCKED)
                return;

            updateStrSkills();
            updateStrMisc();
            updateDexSkills();
            updateDexMisc();
            updateConSkills();
            updateIntSkills();
            updateWisSkills();
            updateWisMisc();
            updateChaSkills();
            updateHonSkills();
            updateSanSkills();
        });
    });

    //Run misc changes
    $('#saves-skills select[name="spell-att"]').change(function(argument) {
        if (LOCKED)
            return;

        updateSpells();
    });

    //Run weight changes
    $('#equipment input[name="weight"]').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            calculateTotalWeight();
        });
    });

    //Run currency changes
    $('#equipment #currancy input:not([name="total"])').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            calculateTotalCurrency();
        });
    });

    $('#equipment #currancy select[name="base"]').change(function(argument) {
        if (LOCKED)
            return;

        calculateTotalCurrency();
    });

    //Update Spell Slots
    $('#spells #total-slots input').each(function(argument) {
        $(this).keyup(function(argument) {
            if (LOCKED)
                return;

            updateSpellSlots($(this));
        });
    });

})