<template>
  <div>
    <div class="container-fluid">
      <div class="section">
        <h6 class="title is-6">Monitoreo de productos</h6>
        <div class="columns">
          <div class="column is-paddingless">
            <div class="tile dashboard-card">
              <div class="tile icon-col danger">
                <div class="icon-container">
                  <i class="fas fa-comment-alt fa-2x" />
                </div>
              </div>
              <div class="tile info-col">
                <div>
                  <div class="title-card">SMS</div>
                  <div class="content-card">
                    <span>TR:</span>
                    <span>0 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-paddingless">
            <div class="tile dashboard-card">
              <div class="tile icon-col danger">
                <div class="icon-container">
                  <i class="fas fa-envelope fa-2x" />
                </div>
              </div>
              <div class="tile info-col">
                <div>
                  <div class="title-card">Email</div>
                  <div class="content-card">
                    <span>TR:</span>
                    <span>0 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-paddingless">
            <div class="tile dashboard-card">
              <div class="tile icon-col danger">
                <div class="icon-container">
                  <i class="fas fa-microphone fa-2x" />
                </div>
              </div>
              <div class="tile info-col">
                <div>
                  <div class="title-card">Voz</div>
                  <div class="content-card">
                    <span>TR:</span>
                    <span>0 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-paddingless">
            <div class="tile dashboard-card">
              <div class="tile icon-col success">
                <div class="icon-container">
                  <i class="fas fa-project-diagram fa-2x" />
                </div>
              </div>
              <div class="tile info-col">
                <div>
                  <div class="title-card">Automation</div>
                  <div class="content-card">
                    <span>TR:</span>
                    <span>0 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-paddingless">
            <div class="tile dashboard-card">
              <div class="tile icon-col success">
                <div class="icon-container">
                  <i class="fas fa-file fa-2x" />
                </div>
              </div>
              <div class="tile info-col">
                <div>
                  <div class="title-card">Filebuilder</div>
                  <div class="content-card">
                    <span>TR:</span>
                    <span>0 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-paddingless">
            <div class="tile dashboard-card">
              <div class="tile icon-col success">
                <div class="icon-container">
                  <i class="fas fa-copy fa-2x" />
                </div>
              </div>
              <div class="tile info-col">
                <div>
                  <div class="title-card">Sherlock</div>
                  <div class="content-card">
                    <span>TR:</span>
                    <span>0 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" style="padding-top: 0;">
        <div class="m-report-row">
          <div class="m-report-column">
            <div class="m-card m-report-card width-100">
              <div class="m-card-header m-report-card-header">
                <div class="m-card-header-title">Tiempos de respuesta de productos último día</div>
              </div>
              <div class="m-card-body">
                <div class="m-card-body-col">
                  <div class="hello" ref="chartdiv"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "Dashboard",
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.paddingRight = 40;
    chart.svgContainer.htmlElement.style.height = "350px";

    let data = [];
    let visits = 150;

    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

      data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits
      });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
  computed: {
    ...mapState({
      summaryProducts: state => state.dashboard.summaryProducts,
      summaryChart: state => state.dashboard.summaryChart
    })
  },
  created() {
    this.updateSummaryChart();
  },
  methods: {
    ...mapActions({
      updateSummaryChart: "updateSummaryChart"
    })
  }
};
</script>

<style lang="scss" scoped>
.columns {
  .column {
    border: 1px solid #dadada;
    border-radius: 5px;
    height: 4.5em;
    margin: 0 20px;
    .dashboard-card {
      height: 100%;
      & .tile {
        align-items: center;
        justify-content: center;
      }
      .icon-col {
        color: #ffffff;
        &.danger {
          background-color: $mui-color-red;
        }
        &.success {
          background-color: $mui-color-green2;
        }
      }
      .info-col {
        font-size: 90%;
        .title-card {
          font-weight: 600;
        }
        .content-card {
          span:first-child {
            color: rgba(0, 0, 0, 0.6);
          }
          span:last-child {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>