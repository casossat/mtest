<template>
  <div class="container">
    <div class="mui-report-filter">
      <div class="filter__container">
        <div class="filter__simple">
          <div class="filter__input">
            <div class="filter__input-item form-group">
              <label for="customers" class="control-label" style="font-weight: 600;">Cliente</label>
              <v-select
                id="IdCuenta"
                :options="[{value: 1, text: 'Item 1'}, {value: 2, text: 'Item 2'}]"
                v-model="selectedValue"
                labelNotFound="Ningun resultado coincide con la búsqueda."
                labelSearchPlaceholder
                :searchable="true"
              />
            </div>
            <div class="filter__input-item form-group">
              <label for="periods" class="control-label" style="font-weight: 600;">Periodo</label>
              <div class="select">
                <date-range-picker
                  ref="picker"
                  opens="center"
                  format="DD-MM-YYYY"
                  :singleDatePicker="false"
                  :timePicker="false"
                  :showWeekNumbers="false"
                  :showDropdowns="false"
                  :autoApply="false"
                  v-model="dateRange"
                ></date-range-picker>
              </div>
            </div>
            <div class="filter__button">
              <button type="button" class="m-button m-button--dark">Buscar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container table-container">
      <table class="table is-bordered is-fullwidth">
        <thead>
          <th v-for="(head, idx) in getTableColumns" :key="idx">{{ head.name }}</th>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import VSelect from "@alfsnd/vue-bootstrap-select";
import moment from "moment";

export default {
  computed: {
    ...mapState({
      clients: state => state.dashboard.clients,
      products: state => state.dashboard.products,
      searchEngine: state => state.report.searchEngine,
      columns: state => state.report.columns,
      dataTableSearchTxt: state => state.report.dataTableSearchTxt
    }),
    ...mapGetters(["getTableColumns"])
  },
  data() {
    return {
      selectedValue: null,
      dateRange: {
        startDate: moment(),
        endDate: moment().add(7, "days")
      }
    };
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