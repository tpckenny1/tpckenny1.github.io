---
layout: default
title: College DataTables
---

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">College Students</h1>
<p class="mb-4">The datatable recorded the daily performance data of swimming players.</p>

{% include datatable.html title="Swimming Player Datatable" school="UTaipei" file="table-example" %}


{% include charts/area.html title="Swimming Player Stat" width=8 labels="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec" datasets="Earnings:20000,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000" currency='true' %}