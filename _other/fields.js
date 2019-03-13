
const fields = {
  des:            'designation',
  orbit_id:       'orbit ID',
  jd:             'time',
  cd:             'calendar time',
  dist:           'distance (au)',
  dist_min:       'minimum approach',
  dist_max:       'maximum approach',
  v_rel:          'approach velocity (km/s)',
  v_inf:          'relative velocity (km/s)',
  t_sigma_f:      'uncertainty',
  body:           'close-approach body',
  h:              'absolute magnitude',
  fullname:       'full-name'
}


            {
            des:    d[0],
            cd:     d[3],
            dist:   d[4],
            v_rel:  d[7],
            h:      d[10]}

    const months = {
      Jan: 'January',
      Feb: 'February',
      Mar: 'March',
      Apr: 'April',
      May: 'March',
      Jun: 'March',
      Jul: 'March',
      Aug: 'March',
      Sep: 'March',
      Oct: 'March',
      Nov: 'March',
      Dec: 'March',
    }

    
    // prod
    // "start": "node server.js",