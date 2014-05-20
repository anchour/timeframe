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
        <div class="col-sm-6 col-sm-offset-3">
          <h2 class="text-center">Contact Us</h2>

          <p><strong>Section 1</strong> <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi velit, egestas vitae mauris sed, fermentum suscipit enim. Sed ut scelerisque ligula. Sed et rhoncus orci, ut semper felis. Proin neque massa, accumsan vitae nunc eu, consectetur pulvinar arcu. Mauris elementum vel nulla at cursus. Donec sed magna at neque ornare venenatis id pulvinar lectus. Vestibulum id venenatis augue. Donec sollicitudin vulputate sem, sit amet euismod nibh vestibulum at. Nulla orci augue, tempus malesuada varius at, aliquam et elit. Aenean sed sapien lacus. Nullam porttitor et ligula et venenatis. Donec sit amet nisl posuere, varius quam id, faucibus arcu. Aliquam a sodales nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
      </div>
    </div>
  </section>
</main>

<?php
include $includesPath . 'footer.php';