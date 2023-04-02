---
layout: default
title: College DataTables
---

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">臺北市立大學</h1>
<p class="mb-4">The datatable recorded the daily performance data of swimming players.</p>

{% include datatable.html title="Swimming Player Datatable" school="UTaipei" file="table-example" %}


{% include charts/area.html title="Swimming Player Stat" width=8 showDetails='true' %}