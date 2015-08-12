/**
 * Main Controller
 * --------------------------------------------------
 */

 (function() {
  'use strict';

  /**
  * @desc modal windows
  * @example <div modal-window show="" data="data"></div>
  */
  angular
  .module('app')
  .directive('modalWindow', modalWindow);

  // Inject document dependency
  modalWindow.$inject = ['$document'];

  function modalWindow($document) {
  
    return {
      restrict: 'E',
      scope: {
        data: '=',
        show: '='
      },
      template: ['<figure ng-class="{ \'is-active\' : show }" class="c-modal">',
                    '<div ng-click="close()" class="c-modal__overlay"></div>',
                    '<div class="c-modal__body">',
                      '<div class="c-modal__content">',
                        '<button ng-click="close()" class="c-modal__close">&#10005;</button>',
                        '<h4 class="c-modal__title">{{ data.name }}</h4>',
                        '<p class="c-modal__label">E-mail</p>',
                        '<p class="c-modal__data">',
                        '<a class="u-text-lowercase" href="mailto:{{ data.email }}">{{ data.email }}</a></p>',
                        '<p class="c-modal__label">Phone</p>',
                        '<p class="c-modal__data">{{ data.phone }}</p>',
                        '<p class="c-modal__label">Address</p>',
                        '<p class="c-modal__data">{{ data.address.street }}, {{ data.address.suite }}, ',
                        '{{ data.address.city }}, {{ data.address.zipcode }}</p>',
                        '<p class="c-modal__label">Website</p>',
                        '<p class="c-modal__data">',
                        '<a target="_blank" href="http://{{ data.website }}">{{ data.website}}</a></p>',
                        '<p class="c-modal__label">Company</p>',
                        '<p class="c-modal__data">{{ data.company.name }}</p>',
                      '</div>',
                    '</div>',
                  '</figure>'].join(''),
     
      link: function (scope, element, attrs) {

        /**
         * Close modal
         */
        scope.close = function() {
          toggle();
        };

        /**
         * Create handler for keydown event
         */
        function escHandler (event) {
          if (event.keyCode === 27) {
            toggle();
            scope.$apply();
          }
        }

        /**
         * Toggle modal
         */
        function toggle() {
          scope.show = !scope.show;
        }

        scope.$on('toggleModal', toggle);

        /**
         * Attach handler to event
         */
        $document.on('keydown', escHandler);

      }

    };
  }

})();