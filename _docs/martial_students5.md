---
layout: default
title: HighSchool DataTables
---

<!-- Page Heading -->
<h1 class="h3 mb-2 text-gray-800">中崙高中空手道</h1>
<p class="mb-4">The datatable recorded the daily performance data of martial art players.</p>

{% include datatable.html title="Martial Art Player Datatable" school="martialart5" sport="martialart" file="table-example" %}
{% include charts/area.html title="Martial Art Player Stat" width=8 showDetails='true' %}
