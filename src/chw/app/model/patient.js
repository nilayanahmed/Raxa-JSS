/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

//Model for storing  patient info
Ext.define('chw.model.patient', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [{
            name: 'familyId',
            type: 'string'
        },{
            name: 'patientId',
            type: 'string'
        },{
            name: 'firstName',
            type: 'string'
        }, {
            name: 'familyName',
            type: 'string'
        }, {
            name: 'birthDate',
            type: 'number'
        }, {
            name: 'patientAge',
            type: 'number'
        }, {
            name: 'patientGender',
            type: 'string'
        }, {
            name: 'patientImage',
            type: 'string'
        }/*, {
            name: 'patientIllnesses',
            type: 'chw.model.illnessModel'
        }*/]
    }
})