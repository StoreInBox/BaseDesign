function itemsCount() {
    var item = $('[front-role="items-count"]')

    item.each(function() {
        var input = $(this).find('[front-role="items-count-input"]');
        var plus = $(this).find('[front-role="items-count-plus"]');
        var minus = $(this).find('[front-role="items-count-minus"]');

        plus.click(function() {
            var inputValue = parseInt(input.val());
            function update() {
                inputValueUpdated = parseInt((inputValue + 1));
            }
            update();
            input.val(inputValueUpdated);
            input.trigger('change');
        });
        minus.click(function() {
            inputValue = parseInt(input.val());
            function update() {
                inputValueUpdated = parseInt((inputValue - 1));
            }
            if (inputValue == 1 || inputValue < 0) {
                return false;
            } else {
                update();
                input.val(inputValueUpdated);
                input.trigger('change');
            }
        });
    });
}
