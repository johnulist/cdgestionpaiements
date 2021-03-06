var templatePayment = '' +
    '<div class="table-responsive">' +
    '<table class="table">' +
    '<thead>' +
    '   <tr>' +
    '       <th><p class="text-danger">Attention deux échéances ne peuvent</p><p class="text-danger">avoir plus de 45 jours d\'écart.</p><span class="title_box ">Date</span></th>' +
    '       <th><span class="title_box ">Méthode de paiement</span></th>' +
    '       <th><span class="title_box ">ID de la transaction</span></th>' +
    '       <th><span class="title_box ">Montant</span></th>' +
    '       <th><span class="title_box ">Facture</span></th>' +
    '       <th></th>' +
    '       <th></th>' +
    '   </tr>' +
    '</thead>' +
    '<tbody id="gestionTBodyEcheances">' +
    '{{#echeancier}}' +
    '   <tr class="current-edit hidden-print {{checked}}">' +
    '       <td class="{{payed}}">' +
    '           <div class="input-group fixed-width-xl">' +
    '               <input type="text" name="payment_date" class="datepicker" value="{{paymentDate}}" {{disabled}} data-echeance-id="{{idEcheancier}}">' +
    '               <div class="input-group-addon">' +
    '                   <i class="icon-calendar-o"></i>' +
    '               </div>' +
    '           </div>' +
    '       </td>' +
    '       <td class="{{payed}}">' +
    '           <input name="payment_method" value="{{paymentMethod}}" list="payment_method_{{idEcheancier}}" class="payment_method" data-echeance-id="{{idEcheancier}}">' +
    '           <datalist id="payment_method_{{idEcheancier}}">' +
    '{{#paymentMethods}}' +
    '               <option value="{{paymentMethod}}"></option>' +
    '{{/paymentMethods}}' +
    '           </datalist>' +
    '       </td>' +
    '       <td class="{{payed}}">' +
    '           <input type="text" name="payment_transaction_id" value="{{paymentTransactionId}}" class="form-control fixed-width-sm" data-echeance-id="{{idEcheancier}}">' +
    '       </td>' +
    '       <td class="{{payed}}">' +
    '           <div class="input-group col-xs-3">' +
    '               <input type="text" name="payment_amount" value="{{paymentAmount}}" {{disabled}} class="form-control fixed-width-sm pull-left" data-echeance-id="{{idEcheancier}}">' +
    '               <div class="input-group-addon">€</div>' +
    '           </div>' +
    '       </td>' +
    '       <td class="{{payed}}">' +
    '           <select name="payment_invoice" id="" {{disabled}}  data-echeance-id="{{idEcheancier}}">' +
    '{{#invoices}}' +
    '               <option value="{{invoiceNumber}}" selected="selected">{{invoiceFormated}}</option>' +
    '{{/invoices}}' +
    '           </select>' +
    '       </td>' +
    '       <td class="actions {{payed}}">' +
    '{{#delete}}' +
    '           <button class="btn btn-danger btn-block" type="button" name="Supprimer" title="Supprimer" data-echeance-id="{{idEcheancier}}">&nbsp;<i class="icon-trash" data-echeance-id="{{idEcheancier}}" data-name="Supprimer">&nbsp;</i></button>' +
    '{{/delete}}' +
    '       </td>' +
    '       <td class="actions {{payed}}">' +
    '{{#valider}}' +
    '           <button class="btn btn-success btn-block" type="button" name="Valider" title="Valider" data-echeance-id="{{idEcheancier}}" data-transaction-id="{{paymentTransactionId}}">&nbsp;<i class="icon-check" data-echeance-id="{{idEcheancier}}" data-transaction-id="{{paymentTransactionId}}" data-name="Valider">&nbsp;</i></button>' +
    '{{/valider}}' +
    '       </td>' +
    '    </tr>' +
    '{{/echeancier}}' +
    '</tbody>' +
    '</table>' +
    '</div>';
