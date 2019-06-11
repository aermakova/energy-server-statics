$(".show-password").on('click',function() {
    const $input = $(".password");
    if ($input.attr('type') === 'password') {
        $input.attr('type', 'text');
    } else {
        $input.attr('type', 'password');
    }
});