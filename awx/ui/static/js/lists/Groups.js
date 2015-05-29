/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/
 



export default
    angular.module('GroupListDefinition', [])
    .value('GroupList', {

        name: 'copy_groups',
        iterator: 'copy_group',
        selectTitle: 'Copy Groups',
        editTitle: 'Groups',
        index: false,
        well: false,

        fields: {
            name: {
                key: true,
                label: 'Name'
            }
        },

        actions: { },

        fieldActions: {
            edit: {
                label: 'Edit',
                ngClick: "editGroup(group.id)",
                icon: 'icon-edit',
                "class": 'btn-xs',
                awToolTip: 'Edit group',
                dataPlacement: 'top'
            },

            "delete": {
                label: 'Delete',
                ngClick: "deleteGroup(group.id, group.name)",
                icon: 'icon-trash',
                "class": 'btn-xs',
                awToolTip: 'Delete group',
                dataPlacement: 'top'
            }
        }
    });
