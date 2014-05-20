<?php
/**
 * Set up a basic includes path. This will have to change for any sub-levels.
 */
$includesPath = __DIR__ . '/includes/';

include $includesPath . 'head.php';
include $includesPath . 'header.php';
?>

<main role="main">
  <section class="white">
    <div class="container">
      <div class="row">

        <div class="col-sm-12 col-md-6 col-lg-8">
          <div class="content-table table">
            <div class="cell">
              <h2>
                Divide and Conquer
              </h2>
              <p>
                Divide your day into meaningful chunks. Look at your whole month and know what you're doing, and when you're free
              </p>
            </div>
          </div>
        </div>

        <?php // phone ?>
        <div class="iphone right lazy" id="divide-conquer" data-original="/assets/img/phones/divide-and-conquer.png">
          <img src="/assets/img/phones/phone-size.png" alt="" width="326" height="680">
        </div>

      </div>
    </div>
  </section>

  <section class="color">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-sm-offset-0 col-md-6 col-md-offset-6 col-lg-8 col-lg-offset-4">
          <div class="content-table table">
            <div class="cell">
              <h2>
                See the future
              </h2>
              <p>
                TimeFrame shows you the next five weeks, even if it's the end of the month. With free scrolling, you can always see what's important to you.
              </p>
            </div>
          </div>
        </div>

        <div class="iphone left lazy" id="see-future" data-original="/assets/img/phones/see-the-future.png">
          <img src="/assets/img/phones/phone-size.png" alt="" width="326" height="680">
        </div>

      </div>
    </div>
  </section>

  <section class="white">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-8">
          <div class="content-table table">
            <div class="cell">
              <h2>
                Save Space
              </h2>
              <p>
                Need to focus? Swipe up to see your day in detail, with just the next week shown above.
              </p>
            </div>
          </div>
        </div>

        <div class="iphone right lazy" id="save-space" data-original="/assets/img/phones/save-space.png">
          <img src="/assets/img/phones/phone-size.png" alt="" width="326" height="680">
        </div>

      </div>
    </div>
  </section>

  <section class="color">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-sm-offset-0 col-md-6 col-md-offset-6 col-lg-8 col-lg-offset-4">
          <div class="content-table table">
            <div class="cell">
              <h2>
                Time is of the Essence
              </h2>
              <p>
                Your most used features - like editing an event's title and time - are just one swipe away.
              </p>
            </div>
          </div>
        </div>

        <div class="iphone left lazy" id="time-essence" data-original="/assets/img/phones/time-is-of-the-essence.png">
          <img src="/assets/img/phones/phone-size.png" alt="" width="326" height="680">
        </div>

      </div>
    </div>
  </section>

  <section class="white">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-8">
          <div class="content-table table">
            <div class="cell">
              <h2>
                It's the little things.
              </h2>
              <p>
                New events start during your free time. Familiar popup menus make changes speedy and intuitive. Open Facebook events right from the main view.
              </p>
            </div>
          </div>
        </div>

        <div class="iphone right lazy" id="little-things" data-original="/assets/img/phones/its-the-little-things.png">
          <img src="/assets/img/phones/phone-size.png" alt="" width="326" height="680">
        </div>

      </div>
    </div>
  </section>
</main>

<?php
include $includesPath . 'footer.php';