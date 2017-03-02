import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import config from 'tg-frontend/config/environment';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: `${config.uploadURL}/csv_importings`
    });

    if (!Ember.isEmpty(files)) {
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0]);
    }

    uploader.on('didUpload', e => {
      alert('upload succeed');
    });
  }
});
