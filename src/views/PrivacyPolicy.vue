<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
  name: 'NotFoundPage'
})
</script>

<template>
  <div class="privacy-policy">
    <h1>Privacy Policy</h1>

    <p>At QRiosity, we take your privacy seriously. We only collect the information copied from your clipboard and the
      URL of the site you are currently accessing. No other user data, such as personal information or activity logs, is
      collected, stored, or transmitted to any database.</p>

    <p>We do not track, store, or access any other data besides the content copied to your clipboard and the URL of the
      current site. Your privacy and security are important to us, and we are committed to ensuring that your experience
      with QRiosity remains private and secure.</p>

    <p>By using QRiosity, you agree that the only data used is the content copied to your clipboard and the URL of the
      site you are currently accessing, and these data are not stored or processed in any way other than for the
      functionality of the application itself.</p>

    <h2>Data We Do Not Collect:</h2>
    <ul>
      <li>Personal information (name, email, address, etc.)</li>
      <li>Usage data or activity logs</li>
      <li>Any form of user-related data stored in a database</li>
    </ul>

    <h2>Changes to This Privacy Policy:</h2>
    <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you
      to review this policy periodically to stay informed about how we are protecting your data.</p>

    <p>If you have any questions about this Privacy Policy, please contact us at <a
        href="mailto:kaianfsantos@gmail.com">kaianfsantos@gmail.com</a>.</p>

    <button class="download-button" onclick="window.print()">Download PDF</button>
  </div>
</template>

<style scoped>
@media print {
  .download-button {
    display: none;
  }
}

.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5em;
  margin-top: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

p {
  font-size: 1em;
  line-height: 1.6;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
