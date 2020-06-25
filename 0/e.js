Report.start = function () {
    Ui.show(Report.html)
    Report.showReport()
  }
  
  Report.showReport = function () {
    Ui.id('reportBody').innerHTML = Report.orderListHtml()
    Ui.id('dayTotal').innerHTML = Report.dayTotal + ''
  }
  
  Report.showDetail = function (i) {
    Ui.showPanel('detail')
    let order = Shop.getOrder(i)
    Ui.id('detailBody').innerHTML = Report.orderDetailHtml(order)
    Ui.id('totalPrice').innerHTML = order.totalPrice
  }
  
  Report.orderListHtml = function () {
    list = []
    let dayTotal = 0
    for (let i=1; i <= Shop.orderCount; i++) {
      let order = Shop.getOrder(i)
      dayTotal += order.totalPrice
      list.push(Report.orderRowHtml(i, order))
    }
    Report.dayTotal = dayTotal
    return list.join('\n')
  }
  
  Report.orderRowHtml = function (i, order) {
    let time = new Date(order.time)
    return '<tr><td><a href="#" onclick="Report.showDetail('+i+')">0' + i + '</a></td><td class="number">' + order.totalPrice + '</td><td>' + Lib.dateToString(time) + '</td><td>' + Lib.timeToString(time) + '</td></tr>'
  }
  
  Report.orderDetailHtml = function (order) {
    let detail = []
    let records = order.records
    for (let i=0; i<records.length; i++) {
      let r = records[i]
      detail.push('<tr><td>' + r.name + '</td><td>' + r.price + '</td><td>' + r.quantity + '</td></tr>')
    }
    return detail.join('\n')
  }