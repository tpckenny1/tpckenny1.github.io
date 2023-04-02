---
layout: default
title: HighSchool DataTables
---

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">西松高中</h1>
<p class="mb-4">The datatable recorded the daily performance data of swimming players.</p>

{% include datatable.html title="Swimming Player Datatable" school="XSSH" file="table-example" %}
{% include charts/area.html title="Swimming Player Stat" width=8 showDetails='true' %}
