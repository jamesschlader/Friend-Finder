var user = {
  name: "",
  scores: []
};

$(".uk-button").on("click", event => {
  event.preventDefault();
  user.name = $("#userName")
    .val()
    .trim();
  for (let i = 0; i < 10; i++) {
    user.scores[i] = parseInt($(`#answer${i + 1}`).val());
  }
  console.dir(user);
  $("#show").empty();
  var open = $(
    '<a class="uk-button uk-button-danger uk-button-large uk-width-1-2 uk-margin-large-bottom" href="#modal-center" uk-toggle>Show Me My BFF</a>'
  );
  $("#show").append(open);

  $.post("api/friends", user).then(data => {
    console.dir(data);

    var modal = $('<div id="modal-center" class="uk-flex-top" uk-modal></div>');
    var body = $(
      '<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical"></div>'
    );
    var close = $(
      '<button class="uk-modal-close-default" type="button" uk-close></button>'
    );
    var headline = $('<h1 class="uk-headline" id="matchName"></h1>');
    headline.text(data.name);
    body.append(close, headline);
    modal.append(body);

    $("#show").append(modal);
  });
});

/*<div class="uk-card uk-card-body uk-card-default">
    <h3 class="uk-card-title"></h3>
    <img data-src="" width="" height="" alt="" uk-img></img>
    </div>*/

/*  <a class="uk-button uk-button-default" href="#modal-center" uk-toggle>Open</a>

<div id="modal-center" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

        <button class="uk-modal-close-default" type="button" uk-close></button>
    <h1 class="uk-headline" id="matchName"></h1>
    </div>
</div> */
